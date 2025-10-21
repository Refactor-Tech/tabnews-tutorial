export default function status(_, response) {
  return response.status(200).json({ message: "API is working" });
}
