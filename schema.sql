PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('798e38f6-fb95-4b86-bbe7-5a861acaa3bf','ba10f973009259a652a69c824727c823da17b28c8916496807bf30fdb036663b',1734252202783,'20241215084322_init',NULL,NULL,1734252202733,1);
INSERT INTO _prisma_migrations VALUES('10b33cd6-bfb8-4fec-a618-697ce7fa3f09','2c10f71904a96833157db7afc67e7d7d408774bcdd9b51f2ab9268bfeeec3034',1734257121607,'20241215100521_add_package_translations',NULL,NULL,1734257121557,1);
INSERT INTO _prisma_migrations VALUES('4bb2fe1c-a5f6-484f-87f6-4ac8e6dbc668','c7952a155fb9b8345ff43db77ccf58b8f3def8e9bb612ab04619444641a6e055',1734259053293,'20241215103733_',NULL,NULL,1734259053191,1);
INSERT INTO _prisma_migrations VALUES('c17aa04c-60fe-4aca-be9f-b5bc9ae81244','07f22f679b72e2cdc1165acceb2c58dfca5d2291daf73de3d0195bb45126d3fc',1734273711535,'20241215144151_init',NULL,NULL,1734273711413,1);
INSERT INTO _prisma_migrations VALUES('55a43a65-e0d2-4ab2-89ff-085fe7a88a0d','9a5be25df0c7ae8d76be3ba474b6c1533406b9a75fadef562f14f36482e86dc3',1734341722094,'20241216093521_init',NULL,NULL,1734341721911,1);
INSERT INTO _prisma_migrations VALUES('63dd8191-9520-46e7-96b1-fdf2c23e67fb','70125664fe55c447efc7b35efcb0555159ec86f1bc16c8fc140f74c3ef54a218',1734671013315,'20241220050333_',NULL,NULL,1734671013269,1);
INSERT INTO _prisma_migrations VALUES('2919e7b5-1279-47e2-9f8d-f0da397584ad','50209a64151c35b6f72dea6c8320f409f504de60d9ea506dde505795bd121fd9',1734673710792,'20241220054830_',NULL,NULL,1734673710687,1);
CREATE TABLE IF NOT EXISTS "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "quantityPerBox" INTEGER NOT NULL,
    "polyethylene" TEXT NOT NULL,
    "thickness" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "sideFoldsSize" TEXT NOT NULL,
    "hasSideFolds" BOOLEAN NOT NULL,
    "hasPrint" BOOLEAN NOT NULL,
    "packing" TEXT NOT NULL,
    "stockQuantity" INTEGER NOT NULL,
    "weight" REAL NOT NULL,
    "price" REAL NOT NULL DEFAULT 0.0,
    "volume" REAL NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT
);
INSERT INTO Package VALUES(9,'Полипропиленовый пакет с клеевым клапаном 40мкр ','',0,'','40мкр ','','Прозрачный','',0,0,'',0,0.0,0.0,3000.0,NULL,'https://packstore.kz/d/htb1du5iaxzsk1rjy1xbq6xoafxa2_1.jpg');
INSERT INTO Package VALUES(10,'Прозрачный пакет с бегунком слайдер','',0,'','50мкр','','Прозрачный','',0,0,'',0,0.0,0.0,3000.0,'Прозрачные пакеты с бегунком (slider) применяются в сфере легкой промышленности для упаковки футболок, белья, рубашек и других текстильных принадлежностей. Изготовлены из полипропилена – прозрачного полимера, через такой пакет упакованная продукция хорошо видна.','https://packstore.kz/thumb/2/q3axSumXcyQ8tQ5kNWSAVw/r/d/pakety_slajdery_2.jpg');
INSERT INTO Package VALUES(13,'Пакет вакуумный','',0,'','80мкр','','','',0,0,'',0,0.0,0.0,3000.0,'Пакеты гладкие, без рифления. Предназначены для непроницаемой упаковки пищевых продуктов.','https://www.trial-market.ru/upload/shop/big/76f/34656.01_image_3.jpg');
INSERT INTO Package VALUES(14,'Пакет восьмишовный бумажный с отрывным замком, с окошком','',0,'','145мкр','','','',0,0,'',0,0.0,0.0,3000.0,'Благодаря многослойному материалу (3 слоя) содержимое надежно защищено от влажности, посторонних запахов и загрязнения.','https://webpack.kz/images/catalog/5/7777777742131-1595603321.jpg');
INSERT INTO Package VALUES(15,'Пакет восьмишовный с ручкой','',0,'','100мкр','','','',0,0,'',0,0.0,0.0,3000.0,'Подходят для фасовки и хранения мелкой и сыпучей продукции (чай и травяные сборы, кофе, специи, орехи, сухофрукты, сладости, различные снэки, корма для животных и др.)','https://image.made-in-china.com/203f0j00yfbkZNqcfpgD/Eight-Sides-Aluminum-Foil-Cooking-Seal-Pouch-Hot-Sale-Stand-up-Customized-Shape-Color-Food-Zipper-Bag-Flat-Bottom-Packaging-Bag.webp');
INSERT INTO Package VALUES(16,'Пакет с пузырчатой пленкой','',0,'','100–110гр','','','',0,0,'',0,0.0,0.0,3000.0,NULL,'https://resources.cdn-kaspi.kz/img/m/p/h53/h15/82740305526814.jpg?format=gallery-large');
INSERT INTO Package VALUES(17,'Пакет курьерский [белый/розовый] 50мкр','',0,'','50мкр','','','',0,0,'',0,0.0,0.0,3000.0,'Эти курьерские пакеты идеальны для пересылки небьющихся товаров небольшого размера (сувениры, канцелярия, семена). Пакеты прочные, не рвутся, не прокалываются, не промокают, что делает их отличным выбором для курьерских служб и интернет-магазинов.','https://resources.cdn-kaspi.kz/img/m/p/h04/hc1/84427137056798.jpg?format=gallery-large');
INSERT INTO Package VALUES(18,'Пакет курьерский розовый 60мкр','',0,'','60мкр','','','',0,0,'',0,0.0,0.0,3000.0,'Эти курьерские пакеты идеальны для пересылки небьющихся товаров небольшого размера (сувениры, канцелярия, семена). Пакеты прочные, не рвутся, не прокалываются, не промокают, что делает их отличным выбором для курьерских служб и интернет-магазинов.','https://my-pack.kz/image/cache/webp/catalog/25h351-700x700.webp');
INSERT INTO Package VALUES(19,'Пакет зип лок (30 мкр)','',0,'','30 мкр','','','',0,0,'',0,0.0,0.0,3000.0,NULL,'https://packstore.kz/d/7.jpg');
INSERT INTO Package VALUES(20,'Пакет зип с ручкой (60 мкр)','',0,'','60мкр','','','',0,0,'',0,0.0,0.0,3000.0,NULL,'https://webpack.kz/images/catalog/6/14000398314-1614022799.jpg');
INSERT INTO Package VALUES(21,'Полипропиленовый пакет с клеевым клапаном 23мкр','',0,'','23мкр','','Прозрачный','',0,0,'',0,0.0,0.0,3000.0,NULL,'https://resources.cdn-kaspi.kz/img/m/p/h21/h8a/87267766468638.jpg?format=gallery-large');
CREATE TABLE IF NOT EXISTS "OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "DeliveryMethod" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);
CREATE TABLE IF NOT EXISTS "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "additionalPhone" TEXT,
    "comment" TEXT,
    "totalPrice" REAL NOT NULL,
    "orderDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryMethodId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    CONSTRAINT "Order_deliveryMethodId_fkey" FOREIGN KEY ("deliveryMethodId") REFERENCES "DeliveryMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "PackageSize" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "packageId" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "sideFolds" TEXT,
    "stockQuantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "PackageSize_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO PackageSize VALUES(10,9,'26X35+4',NULL,3000,25.0);
INSERT INTO PackageSize VALUES(11,9,'30X40+4',NULL,3000,29.0);
INSERT INTO PackageSize VALUES(12,9,'35X45+4',NULL,3000,35.0);
INSERT INTO PackageSize VALUES(13,9,'45X60+4',NULL,3000,45.0);
INSERT INTO PackageSize VALUES(14,10,'26X35',NULL,3000,40.0);
INSERT INTO PackageSize VALUES(15,10,'30X40',NULL,3000,45.0);
INSERT INTO PackageSize VALUES(16,10,'35X45',NULL,3000,50.0);
INSERT INTO PackageSize VALUES(17,10,'45X62 ',NULL,3000,70.0);
INSERT INTO PackageSize VALUES(45,13,'22x32',NULL,3000,40.0);
INSERT INTO PackageSize VALUES(46,13,'24x36',NULL,3000,50.0);
INSERT INTO PackageSize VALUES(47,13,'18x26',NULL,3000,30.0);
INSERT INTO PackageSize VALUES(48,13,'15x25',NULL,3000,20.0);
INSERT INTO PackageSize VALUES(49,14,'10x20+6',NULL,3000,70.0);
INSERT INTO PackageSize VALUES(50,14,'14x24x6',NULL,3000,90.0);
INSERT INTO PackageSize VALUES(51,14,'18x28+8',NULL,3000,110.0);
INSERT INTO PackageSize VALUES(52,14,'20x30+8',NULL,3000,150.0);
INSERT INTO PackageSize VALUES(53,15,'10x20+6',NULL,3000,60.0);
INSERT INTO PackageSize VALUES(54,15,'14x24+6',NULL,3000,80.0);
INSERT INTO PackageSize VALUES(55,15,'18x28+8',NULL,3000,108.0);
INSERT INTO PackageSize VALUES(56,15,'20x30+8',NULL,3000,118.0);
INSERT INTO PackageSize VALUES(57,16,'15x20+4',NULL,3000,50.0);
INSERT INTO PackageSize VALUES(58,16,'23x28+4',NULL,3000,65.0);
INSERT INTO PackageSize VALUES(59,16,'28x35+4',NULL,3000,85.0);
INSERT INTO PackageSize VALUES(60,16,'38x44+4',NULL,3000,110.0);
INSERT INTO PackageSize VALUES(61,17,'22x28+4',NULL,3000,25.0);
INSERT INTO PackageSize VALUES(62,17,'28x36+4',NULL,3000,35.0);
INSERT INTO PackageSize VALUES(63,17,'32x40+4',NULL,3000,40.0);
INSERT INTO PackageSize VALUES(64,17,'38x47+4',NULL,3000,65.0);
INSERT INTO PackageSize VALUES(65,17,'45x55+4',NULL,3000,95.0);
INSERT INTO PackageSize VALUES(66,17,'55x65+4',NULL,3000,110.0);
INSERT INTO PackageSize VALUES(67,18,'28x36+4',NULL,3000,44.0);
INSERT INTO PackageSize VALUES(68,18,'38x47+4',NULL,3000,80.0);
INSERT INTO PackageSize VALUES(69,18,'45x55+4',NULL,3000,110.0);
INSERT INTO PackageSize VALUES(70,18,'55x65+4',NULL,3000,140.0);
INSERT INTO PackageSize VALUES(71,19,'6x9',NULL,3000,1.800000000000000044);
INSERT INTO PackageSize VALUES(72,19,'8x12',NULL,3000,2.700000000000000177);
INSERT INTO PackageSize VALUES(73,19,'10x15',NULL,3000,3.0);
INSERT INTO PackageSize VALUES(74,19,'13x19',NULL,3000,4.0);
INSERT INTO PackageSize VALUES(75,19,'16x24',NULL,3000,7.0);
INSERT INTO PackageSize VALUES(76,19,'20x30',NULL,3000,10.0);
INSERT INTO PackageSize VALUES(77,19,'24x36',NULL,3000,14.0);
INSERT INTO PackageSize VALUES(78,19,'32x45',NULL,3000,30.0);
INSERT INTO PackageSize VALUES(79,19,'36x48',NULL,3000,37.0);
INSERT INTO PackageSize VALUES(80,19,'40x60',NULL,3000,55.0);
INSERT INTO PackageSize VALUES(81,20,'45x35+7',NULL,3000,80.0);
INSERT INTO PackageSize VALUES(82,20,'50x40+7',NULL,3000,90.0);
INSERT INTO PackageSize VALUES(83,21,'6x9+2',NULL,3000,3.0);
INSERT INTO PackageSize VALUES(84,21,'8x12+2',NULL,3000,3.200000000000000177);
INSERT INTO PackageSize VALUES(85,21,'10x15+2',NULL,3000,4.0);
INSERT INTO PackageSize VALUES(86,21,'13x19+3',NULL,3000,6.0);
INSERT INTO PackageSize VALUES(87,21,'16x24+3',NULL,3000,10.0);
INSERT INTO PackageSize VALUES(88,21,'20x30+3',NULL,3000,14.0);
INSERT INTO PackageSize VALUES(89,21,'25x36+3',NULL,3000,18.0);
INSERT INTO PackageSize VALUES(90,21,'30x40+3',NULL,3000,24.0);
INSERT INTO PackageSize VALUES(91,21,'35x45+3',NULL,3000,30.0);
INSERT INTO PackageSize VALUES(92,21,'40x55+3',NULL,3000,34.0);
INSERT INTO PackageSize VALUES(93,21,'45x60+3',NULL,3000,40.0);
INSERT INTO PackageSize VALUES(94,21,'50x65+3',NULL,3000,45.0);
CREATE TABLE IF NOT EXISTS "PackageTranslation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "packageId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "PackageTranslation_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO sqlite_sequence VALUES('Package',21);
INSERT INTO sqlite_sequence VALUES('DeliveryMethod',0);
INSERT INTO sqlite_sequence VALUES('Order',0);
INSERT INTO sqlite_sequence VALUES('PackageSize',94);
INSERT INTO sqlite_sequence VALUES('PackageTranslation',8);
COMMIT;
