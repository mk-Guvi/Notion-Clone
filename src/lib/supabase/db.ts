import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });

if (!process.env?.DATABASE_URL) {
  console.log("No DB Found");
}

const client = postgres(process.env?.DATABASE_URL || "", {
  max: 1,
});

const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log("Migrating Client");
    await migrate(db, {
      migrationsFolder: "migrations",
    });
    console.log("Successfully Migrated Client");
  } catch (e) {
    console.log("***** Error Migrating Client *****", e);
  }
};

migrateDb(); //this keeps the db to be updated with schemas
export default db;
