import database from "infra/database.js";

export default async function status(_, response) {
  const result = await database.query("SELECT 1 + 2 as sum;");
  console.log(result.rows);
  return response.status(200).json({ message: "API is working" });
}
