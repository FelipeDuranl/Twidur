import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1643687970134 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Users",
        columns:[
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true
          },
          {
            name: "username",
            type: "varchar",
            isUnique: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("Users");
    }

}
