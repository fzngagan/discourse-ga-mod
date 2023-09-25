import { apiInitializer } from "discourse/lib/api";
import { getOwner } from "discourse-common/lib/get-owner";

export default apiInitializer("0.11.1", api => {
  const currentUser = getOwner(this).lookup("service:current-user");
  const userIdObject = window.dataLayer?.find(item => item.userId);
  if (userIdObject) {
    userIdObject["userId"] = currentUser?.external_id;
  }
});
