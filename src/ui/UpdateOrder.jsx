import React from "react";
import { updateOrder } from "../services/apiRestaurant";
import { useFetcher } from "react-router-dom";
import Button from "./Button";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority </Button>
    </fetcher.Form>
  );
};

export const action = async ({ request, params }) => {
  const data = { priority: true };
  await updateOrder(params?.orderID, data);
  return null;
};

export default UpdateOrder;
