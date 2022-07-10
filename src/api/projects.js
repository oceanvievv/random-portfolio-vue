import client from "@/api/client";

async function fetchProjects() {
  let response;

  try {
    response = await client.get("projects");
  } catch (e) {
    console.error(e);
    response = { data: [] };
  }

  return {
    projects: response.data,
  };
}

export { fetchProjects };
