import React, { useEffect, useState } from "react";
import Mainbackground from "../components/Mainbackground";
import "../Css/jobdescription.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function JobDescription() {
  const path = "jobdescription";
  const API_URL = process.env.REACT_APP_API_URL;
  const { lang, id } = useParams();
  const [jobDescription, setJobDescription] = useState([]);
  const [responsabilitiesList, setResponsabilitiesList] = useState([]);
  const [reqList, setReqList] = useState([]);
  const [benefitList, setBenefitList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPositions = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/careers/${lang}/getbyid/${id}`
        );
        const result = response.data[0];
        const itemsResponsabilites = result.responsabilites || ""; // Default to an empty string
        const itemsArray =
          typeof itemsResponsabilites === "string"
            ? itemsResponsabilites.split(",").map((item) => item.trim())
            : [];
        const itemsReq = result.requirment || ""; // Default to an empty string
        const itemsArrayReq =
          typeof itemsReq === "string"
            ? itemsReq.split(",").map((item) => item.trim())
            : [];
        const itemsBenefit = result.benefit || ""; // Default to an empty string
        const itemsArrayBenefit =
          typeof itemsBenefit === "string"
            ? itemsBenefit.split(",").map((item) => item.trim())
            : [];

        setJobDescription(result);
        setResponsabilitiesList(itemsArray);
        setReqList(itemsArrayReq);
        setBenefitList(itemsArrayBenefit);
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };

    fetchPositions();
  }, [id, lang]);
  return (
    <>
      <Mainbackground path={path} />
      {jobDescription && (
        <div className="container">
          <p className="title_jobdescr">{jobDescription.position_name} </p>
          <div className="row">
            <div className=" col-lg-12 col-md-12 col-sm-12">
              <h5>{lang === "ar"
                        ? `الوصف الوظيفي ` // RTL text
                        : `Job Description: `}</h5>
              <p>{jobDescription.description}</p>
              <h5> {lang === "ar"
                        ? `المسؤوليات ` // RTL text
                        : `Responsibilities: `}</h5>
              <ul>
                {responsabilitiesList.length > 0 ? (
                  responsabilitiesList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>
                    {lang === "ar"
                        ? `لا يوجد مسؤوليات ` // RTL text
                        : `No responsibilities listed. `}
                  </li>
                )}
              </ul>
              <h5>
              {lang === "ar"
                        ? `المتطلبات ` // RTL text
                        : `Requirements: `}
              </h5>
              <ul>
                {reqList.length > 0 ? (
                  reqList.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>
                    {lang === "ar"
                        ? `لا يوجد متطلبات ` // RTL text
                        : `No Requirements listed. `}
                  </li>
                )}
              </ul>
              <h5>
              {lang === "ar"
                        ? `الفوائد ` // RTL text
                        : `Benefits `}
              </h5>
              <ul>
                {benefitList.length > 0 ? (
                  benefitList.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>
                    {lang === "ar"
                        ? `لا يوجد فوائد ` // RTL text
                        : `No benefits listed. `}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobDescription;
