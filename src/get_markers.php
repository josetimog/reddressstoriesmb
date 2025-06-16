<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once 'connect.php';

try {
    // Updated query to fetch new boolean columns
    $stmt = $db->query("
        SELECT id, year, date, name, age, case_type, home_location, home_latitude, home_longitude,
               last_location, last_latitude, last_longitude, image,
               lgbt, survival_worker, unhoused, cfs, perp_relation, parent
        FROM victims ORDER BY date
    ");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $geojson = [
        'type' => 'FeatureCollection',
        'features' => []
    ];

    foreach ($rows as $row) {
        $image = $row['image'] ?? 'photo_unavailable.jpg';

        // Common properties shared by both home and last seen markers
        $sharedProperties = [
            'id' => $row['id'],
            'name' => $row['name'],
            'age' => $row['age'],
            'case_type' => $row['case_type'],
            'home_location' => $row['home_location'],
            'last_location' => $row['last_location'],
            'year' => $row['year'],
            'date' => $row['date'],
            'image' => $image,
            'lgbt' => (bool)$row['lgbt'],
            'survival_worker' => (bool)$row['survival_worker'],
            'unhoused' => $row['unhoused'],
            'cfs' => $row['cfs'],
            'perp_relation' => $row['perp_relation'],
            'parent' => $row['parent'],
        ];

        // Home location marker
        $geojson['features'][] = [
            'type' => 'Feature',
            'geometry' => [
                'type' => 'Point',
                'coordinates' => [(float)$row['home_longitude'], (float)$row['home_latitude']]
            ],
            'properties' => array_merge($sharedProperties, [
                'location_type' => 'Home',
            ])
        ];

        // Last seen location marker
        if (!empty($row['last_latitude']) && !empty($row['last_longitude'])) {
            $geojson['features'][] = [
                'type' => 'Feature',
                'geometry' => [
                    'type' => 'Point',
                    'coordinates' => [(float)$row['last_longitude'], (float)$row['last_latitude']]
                ],
                'properties' => array_merge($sharedProperties, [
                    'location_type' => 'Last Seen',
                ])
            ];
        }
    }

    echo json_encode($geojson);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
