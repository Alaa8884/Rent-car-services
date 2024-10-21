import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import "../../styles/member-item.css"


const OurMembers = [
  {
    name: "Alaa Mohammed",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Alen Alaa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Yamen Alaa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Youssef Mohammed",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];


function MemberItem() {
  return (
    <>
      {OurMembers.map((member, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index}>
          <div className="member-card mb-5">
            <div className="member-card-img-social">
              {" "}
              <img
                src={member.imgUrl}
                alt={`${member.name} image`}
                className=" w-100"
              />{" "}
              <div className="single-member-social">
                <Link to={member.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={member.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>

                <Link to={member.linkedinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>

                <Link to={member.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h4 className="section-title">{member.name}</h4>
            <p className="section-description text-center">
              {member.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
}

export default MemberItem;
