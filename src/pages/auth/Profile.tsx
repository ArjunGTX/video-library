import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Avatar } from "../../components";
import * as api from "../../model/api";
import { User } from "../../model/type";
import { ToastError } from "../../util/constant";
import { getFormattedDate } from "../../util/helper";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    getUserInfoRequest();
  }, []);

  const getUserInfoRequest = async () => {
    try {
      const { status, data } = await api.getUserInfo();
      if (status !== 200) return;
      setUserInfo(data.user);
    } catch (error) {
      toast.error(ToastError.GENERAL);
    }
  };
  return (
    <div className="full-width full-height fc-ct-ct txt-light">
      {userInfo && (
        <>
          <Avatar size="xl" name={userInfo.firstName} />
          <h3 className="txt-primary my-md">{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
          <div className="fr-fs-ct my-md">
            <div className="fc-fs-fs px-xl">
              <p className="my-sm">EMAIL</p>
              <p className="my-sm">USER FROM</p>
              <p className="my-sm">WATCHED</p>
              <p className="my-sm">PLAYLISTS</p>
              <p className="my-sm">LIKED</p>
              <p className="my-sm">WATCH LATER</p>
            </div>
            <div className="fc-fs-fs px-xl">
              <p className="my-sm">{userInfo.email.toUpperCase()}</p>
              <p className="my-sm">{getFormattedDate(userInfo.createdAt)}</p>
              <p className="my-sm">{userInfo.history.length} VIDEOS</p>
              <p className="my-sm">{userInfo.playlists.length} VIDEOS</p>
              <p className="my-sm">{userInfo.likes.length} VIDEOS</p>
              <p className="my-sm">{userInfo.watchlater.length} VIDEOS</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
