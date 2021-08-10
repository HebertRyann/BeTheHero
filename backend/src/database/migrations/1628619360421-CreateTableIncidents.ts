import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableIncidents1628619360421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "incidents",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "ong_id",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "value",
                        type: "real",
                        isNullable: false
                    },
                ]
            }) 
        );

        await queryRunner.createForeignKey(
            "incidents" ,
            new TableForeignKey({
                name: "FK_Incidents",
                referencedColumnNames: ["id"],
                referencedTableName: "ong",
                columnNames: ["ong_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropForeignKey("incidents", "FK_Incidents");
        await queryRunner.dropTable("incidents");
    }

}
