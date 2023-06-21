import { BsCheck2Square } from "react-icons/bs";

export default [
   {
      header: "Manage License",
   },
   {
      id: "vertical_key_or_license",
      title: "Key or License",
      icon: <BsCheck2Square />,
      action: "read",
      resource: "ACL",
      navLink: "/key-license",
   },
];
