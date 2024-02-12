import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  Container,
} from "react-bootstrap";
import imagesData from "./imagesData"; // Import your images data
import "./AdminPage.css";
import upload from "../../assets/upload.png";
import Footer from "../../Components/Footer/Footer";

const AdminPage = () => {
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [files, setFiles] = useState([]); // For file upload

  // Get unique years from imagesData
  const years = [
    ...new Set(imagesData.map((image) => new Date(image.date).getFullYear())),
  ];

  // Filter images by year
  const filteredImagesByYear =
    selectedYear !== null
      ? imagesData.filter(
          (image) =>
            selectedYear === "All Years" ||
            new Date(image.date).getFullYear() === selectedYear
        )
      : imagesData;

  // Get unique months for the selected year
  const months =
    selectedYear !== null
      ? Array.from(
          new Set(
            filteredImagesByYear.map((image) => new Date(image.date).getMonth())
          )
        ).sort((a, b) => a - b)
      : [];

  // Filter images by year and month
  const filteredImages =
    selectedMonth !== null
      ? filteredImagesByYear.filter(
          (image) => new Date(image.date).getMonth() === selectedMonth
        )
      : filteredImagesByYear;

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    const selectedFiles = [...uploadedFiles].map((file) => ({
      ...file,
      year: selectedYear,
      month: selectedMonth,
    }));
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            {/* Year Filter */}
            <ButtonGroup vertical className="mb-3">
              <Button
                onClick={() => setSelectedYear("All Years")}
                variant={selectedYear === "All Years" ? "primary" : "secondary"}
              >
                All Years
              </Button>
              {years.map((year) => (
                <Button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  variant={selectedYear === year ? "primary" : "secondary"}
                >
                  {year}
                </Button>
              ))}
            </ButtonGroup>
            {/* Month Filter */}
            {selectedYear !== null && selectedYear !== "All Years" && (
              <div className="scrollable-months">
                {months.map((month) => (
                  <Button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    variant={selectedMonth === month ? "primary" : "secondary"}
                  >
                    {new Date(2000, month).toLocaleString("en-US", {
                      month: "long",
                    })}
                  </Button>
                ))}
              </div>
            )}
          </Col>
          <Col md={9}>
            {/* Drag and drop container */}
            
            <div className="upload-container">
              <div className="dashed-container">
                <DatePicker
                  selected={
                    selectedYear !== null ? new Date(selectedYear, 0) : null
                  }
                  onChange={(date) => setSelectedYear(date.getFullYear())}
                  showYearPicker
                  dateFormat="yyyy"
                  placeholderText="Select Year"
                />
                {selectedYear && (
                  <DatePicker
                    selected={
                      selectedMonth !== null
                        ? new Date(selectedYear, selectedMonth)
                        : null
                    }
                    onChange={(date) => setSelectedMonth(date.getMonth())}
                    showMonthYearPicker
                    dateFormat="MMMM yyyy"
                    placeholderText="Select Month"
                    minDate={new Date(selectedYear, 0)} // Set minDate to the beginning of the year
                    maxDate={new Date(selectedYear, 11)} // Set maxDate to the end of the year
                  />
                )}
                <div className="dashed-container-upload">
                  <label htmlFor="file-upload">
                    {/* Here we display the image */}
                    <img src={upload} alt="Upload Image" />
                  </label>

                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileUpload}
                    multiple
                    onClick={() =>
                      document.getElementById("file-upload").click()
                    }
                  />
                  <div className="upload-text">
                    <p>Drag and drop files here or click to browse</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <Row>
              {filteredImages.map((image) => (
                <Col key={image.id} sm={6} md={4} lg={3}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={image.url} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: "Urbanist" }}>
                        {image.title}
                      </Card.Title>
                      <Card.Text style={{ fontFamily: "Urbanist" }}>
                        Date: {new Date(image.date).toLocaleDateString()}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdminPage;
