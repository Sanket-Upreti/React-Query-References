import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getDummyJson = async () => {
  const getData = await axios.get("http://localhost:4000/cars");
  return getData;
};

export const useCarsHook = (thirdArgs, onSuccess, onError) => {
  const getCarsDetails = useQuery(
    ["dummyJson"],
     getDummyJson,
     thirdArgs
  );

  return getCarsDetails;
}
