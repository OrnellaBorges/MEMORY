import { useState } from "react";
import UserList from "../../components/List/UsersList";
//import { Input } from "../../components/Input/Input";
import InputSearch from "../../components/SearchFilter/InputSearch";

export default function TestPage() {
  return (
    <>
      <InputSearch />
      <UserList />
    </>
  );
}
