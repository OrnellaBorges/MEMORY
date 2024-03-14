import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";
import { EmployeePage } from "./pages/Employee/EmployeePage";
import { ManagerPage } from "./pages/Manager/ManagerPage";
import { DetailRequestPage } from "./pages/DetailRequest/DetailRequestPage";
import { ModalTest } from "./components/Modals/ModalTest";
import { Modal } from "./components/Modals/Modal";

import { useState } from "react";
import "./App.css";
import type { LeaveRequest } from "./types/LeaveRequestType";
import TestPage from "./pages/TestPage/TestPage";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<number | null>(null);
  const [requests, setRequests] = useState<LeaveRequest[]>([]);

  const toggleModalTest = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && <Modal closeModal={toggleModal} />}
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
      <Layout handleModalOpen={toggleModalTest}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/employee"
            element={<EmployeePage updateRequests={setRequests} />}
          />
          <Route
            path="/manager"
            element={
              <ManagerPage requests={requests} updateId={setRequestId} />
            }
          />
          <Route path="/test" element={<TestPage />} />
          <Route
            path="/detail-request"
            element={
              <DetailRequestPage
                requests={requests}
                id={requestId}
                updateRequest={setRequests}
              />
            }
          />
        </Routes>
      </Layout>

      <ModalTest handleClose={toggleModalTest} show={showModal}>
        <p>hello modal</p>
      </ModalTest>
    </>
  );
}
