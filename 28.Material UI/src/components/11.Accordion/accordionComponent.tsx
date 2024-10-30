
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function CustomAccordion() {
  return (
    <>
    
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, porro.</Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, porro.</Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Accordion 3</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, porro.</Typography>
      </AccordionDetails>
    </Accordion>
    </>
  );
};


