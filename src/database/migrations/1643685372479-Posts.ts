// import {MigrationInterface, QueryRunner, Table} from "typeorm";

// export class Post1643685372479 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//       await queryRunner.createTable(
//         new Table({
//           name: "Posts",
//           columns:[
//             {
//               name: "id",
//               type: "uuid",
//               isPrimary: true
//             },
//             {
//               name: "message",
//               type: "varchar"
//             },
//             {
//               name: "likes",
//               type: "numeric"
//             },
//             {
//               name: "user_id",
//               type: "uuid"
//             },
//             {
//               name: "created_at",
//               type: "timestamp",
//               default: "now()"
//             }
//           ],
//           foreignKeys: [
//             {
//               name: "fk_users",
//               columnNames: ["user_id"],
//               referencedTableName: "Users",
//               referencedColumnNames: ["id"]
//             }
//           ]
//         })
//       );
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//       await queryRunner.dropTable("Posts");
//     }

// }
