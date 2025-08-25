export async function fetchImages(breed: string) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`,
  );
  const data: { status: string; message: string[] } = await response.json();
  return data.status === "success" ? data.message : null;
}
