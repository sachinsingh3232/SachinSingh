import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@mui/styles';
// import { Container, Row } from "react-bootstrap";
import pdf from '../../assets/UPDATED_RESUME.pdf';
import { AiOutlineDownload, AiOutlineHome } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import '../../components/core-ui/project-page/projectPage.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
  const [width, setWidth] = useState(1200);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  console.log(width)

  const useStyles = makeStyles((t) => ({
    home: {
      color: '#1D9BF0',
      position: 'absolute',
      top: 25,
      left: 25,
      padding: '7px',
      borderRadius: '50%',
      boxSizing: 'content-box',
      fontSize: '2rem',
      cursor: 'pointer',
      boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
      transition: 'all 0.3s ease-in-out',
      "&:hover":
      {
        color: theme.tertiary,
        transform: 'scale(1.1)',
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '1.8rem',
      }
    },
  }));

  const classes = useStyles();

  return (
    <div className="resumePage" style={{ backgroundColor: '#0F0C41', width: "100%" }}>
      <div className="projectPage-header" >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: '#ffff' }}>Resume</h1>
      </div>
      <div className="projectPage-container">
        <a download={true} href={pdf} style={{
          border: '3px solid #1D9BF0',
          color: "#1D9BF0",
          borderRadius: '30px',
          textTransform: 'inherit',
          textDecoration: 'none',
          padding: "10px 15px",
          marginBottom: "10px"
        }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>

        <Document file={pdf} className="d-flex justify-content-center" style={{ display: "flex", justifyContent: "center" }}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
        </Document>
      </div>
    </div>
  );
}
export default Resume