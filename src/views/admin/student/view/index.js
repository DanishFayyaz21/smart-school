// ** React Imports
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store";

// ** Reactstrap Imports
import { Alert, Col, Row } from "reactstrap";

// ** User View Components
import PlanCard from "./PlanCard";
import UserTabs from "./Tabs";
import UserInfoCard from "./UserInfoCard";

// ** Styles
import "@styles/react/apps/app-users.scss";
import { get } from "../../../../services";
import { setCurrentStudent } from "../../../../redux/slices/auth/userSlice";

const StudentView = () => {
  // ** Store Vars
  const store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [user, setUser] = useState()

  // ** Hooks
  const { id } = useParams();


  console.log('jhvjhvh', id)

  // ** Get suer on mount
  useEffect(() => {
    console.log('hjvjhvjhvh', id)

    const getUserById = async () => {
      try {
        const res = await get(`/get-student-by-id/${id}`);

        setUser(res.data?.data?.user)
        dispatch(setCurrentStudent(res.data?.data?.user))

        console.log('hvhjvjhv', res)
      } catch (error) { }
    };

    getUserById();
  }, [id]);

  // useEffect(() => {
  //   dispatch(getUser(parseInt(id)))
  // }, [dispatch])

  const [active, setActive] = useState("1");

  const toggleTab = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  console.log('hvjhvjhvjh', user)

  return (
    <div className="app-user-view">
      <Row>
        <Col xl="4" lg="5" xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard selectedUser={user} />
          {/* <PlanCard /> */}
        </Col>
        <Col xl="8" lg="7" xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs selectedUser={user} active={active} toggleTab={toggleTab} />
        </Col>
      </Row>
    </div>
  )
};
export default StudentView;
