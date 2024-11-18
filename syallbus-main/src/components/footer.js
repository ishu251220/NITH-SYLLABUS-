import { Divider } from "@mui/material";
import GitHubButton from "react-github-btn";

export default function Footer({ visitCount }) {
  return (
    <div
      style={{
        height: "0.5em",
        color: "gray",
        textAlign: "center",
        width: "100%",
        fontSize: "10px",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Divider sx={{ mb: 1 }} />
      <span>All information displayed belongs to NIT Hamirpur</span>
      <br />
      <span>
        Made with ❤️ by{" "}
        <a
         
          style={{ textDecoration: "none", color: "gray" }}
        >
          Ishu Meena
        </a>
      </span>
      <br />
      <GitHubButton
       
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star Ishu Meena/nith-syllabus on GitHub"
      >
        Star
      </GitHubButton>
      <div id="visits">{visitCount}</div>
    </div>
  );
}
