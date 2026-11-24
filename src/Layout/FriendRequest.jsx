import { IoSearch } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import GroupHeading from "../Componenet/GroupHeading";
import GroupMemberList from "../Componenet/GroupMemberList";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove, push, set } from "firebase/database";
import { useSelector } from "react-redux";

const FriendRequest = () => {
  const db = getDatabase();
  let [friendRequest, setfriendRequest] = useState([]);

  let data = useSelector((state) => state.counter.value.uid);

  // console.log(data);

  useEffect(() => {
    const starCountRef = ref(db, "friendRequestList");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data == item.val().senderId || data == item.val().reciverId) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setfriendRequest(arr);
    });
  }, []);
  // console.log(friendRequest);

  let handlecancel = (item) => {
    remove(ref(db, "friendRequestList/" + item.id));
  };
  
  let handleFriend = (item) => {
    console.log(item);
     set(push(ref(db, 'friends/')), {
       ...item
      }).then(()=>{
        remove(ref(db, "friendRequestList/" + item.id));
      })
  };

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
        <GroupHeading name="Friend Request" />
        <div className="overflow-y-scroll scrollbar-none w-full h-66">
          {friendRequest.map(
            (item) =>
              data == item.reciverId && (
                <GroupMemberList
                  calcleBtnType={true}
                  image={item.senderPhotoUrl}
                  onClickforCancel={() => handlecancel(item)}
                  onClickForAdd={() => {
                    handleFriend(item);
                  }}
                  cancelBtn="Cancel"
                  acceptBtn="Accept"
                  name={item.senderName}
                  bio="Hi Guys, Wassup!"
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
