import { IoSearch } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import GroupHeading from "../Componenet/GroupHeading";
import GroupMemberList from "../Componenet/GroupMemberList";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BlockedUsers = () => {
  const db = getDatabase();
  let [block, setBlock] = useState([]);

 let data = useSelector((state) => state.counter.value);


  useEffect(() => {
    const starCountRef = ref(db, "block");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(data.uid==item.val().blockById || data.uid==item.val().blockedId )
        arr.push({...item.val(),id:item.key});

        // console.log(item.val());

      });
      setBlock(arr);
    });
  }, []);

  console.log(block);

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
        <GroupHeading name="Blocked Users" />
        <div className="overflow-y-scroll scrollbar-none w-full h-66">
          {block.map((item) => (
 
            <GroupMemberList  image={item.blockedPhotoURL} name={item.blockedName}  bio={item.blockByName}  acceptBtn="Unblock"  />
            // <h2>ji</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockedUsers;
