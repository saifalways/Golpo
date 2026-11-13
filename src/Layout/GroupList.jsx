import { IoSearch } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import GroupHeading from "../Componenet/GroupHeading";
import GroupMemberList from "../Componenet/GroupMemberList";

const GroupList = () => {
  return (
    <div className="h-103.75  mt-7.5 ">
      <div className="relative shadow-2xl rounded-xl ">
        <IoSearch className="text-xl absolute top-1/2 -translate-y-1/2 left-3 " />
        <input
          className=" outline-0 px-11 w-full py-3 font-Poppins   "
          type="text"
          placeholder="Search"
        />
        <PiDotsThreeVerticalBold className="text-xl absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer  text-btnclr " />
      </div>
      <div className="w-full h-83 rounded-xl bg-red-100 mt-6 px-3">
        <GroupHeading name="Groups list" />
        <div className="overflow-y-scroll scrollbar-none w-full h-66">
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
          <GroupMemberList name="Friends Reunion" bio="Hi Guys, Wassup!" />
        </div>
      </div>
    </div>
  );
};

export default GroupList;
