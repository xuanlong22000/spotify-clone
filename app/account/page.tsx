import AccountContent from "@/components/AccountContent";
import Header from "@/components/Header";
import React from "react";

const Account = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="mb-2 fex flex-col gap-y-6">
        <h1 className="text-white text-3xl font-semibold">Account Setting</h1>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;
