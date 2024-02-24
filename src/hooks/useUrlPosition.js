import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get("lat"));
  const lng = parseFloat(searchParams.get("lng"));

  return [lat, lng];
}
// import { useSearchParams } from "react-router-dom";

// export function useUrlPosition() {
//   const [searchParams] = useSearchParams();
//   const lat = searchParams.get("lat");
//   const lng = searchParams.get("lng");

//   return [lat, lng];
// }
