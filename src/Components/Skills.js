import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot'; 
import CodeIcon from '@material-ui/icons/Code';
import LaptopMacIcon from '@material-ui/icons/LaptopMac'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import java     from "../Components/Images/java.png"
import react    from "../Components/Images/react.png"
import python   from "../Components/Images/python.png"
import kotlin   from "../Components/Images/kotlin.png"
import swift    from "../Components/Images/swift.png"
import js       from "../Components/Images/js.png"
import css      from "../Components/Images/css.png"
import html     from "../Components/Images/html5.png" 

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
  },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
  },
    customlogo: {
        width: "25px",
    } 
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">    
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">
            2010
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            <img src = {css} alt= {css} className={classes.customlogo}/>  
              HTML, CSS, COBOL, JCL, DB2.
            </Typography>
            <img src = {html} alt= {html} className={classes.customlogo}/>  
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2014
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            JAVA, SQL, MONGO.
            <img src = {java} alt= {java} className={classes.customlogo}/> 
            </Typography>
            <Typography>Spring Batch, APX, Hibernate   </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Python
            <img src = {python} alt= {python} className={classes.customlogo}/> 
            </Typography>
            <Typography>Django, Flask</Typography>
          </Paper>
        </TimelineContent> 
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">
            2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
               <img src = {react} alt= {react} className={classes.customlogo}/> 
              JavaScript
               <img src = {js} alt= {js} className={classes.customlogo}/> 
            </Typography>
            <Typography>React!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">
            2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            <img src = {kotlin} alt= {kotlin} className={classes.customlogo}/> 
               iOS, Android, React Native, Flutter
            <img src = {swift} alt= {swift} className={classes.customlogo}/> 
            </Typography>
            <Typography>Swift, Kotlin, Dart</Typography>
          </Paper>
        </TimelineContent> 
      </TimelineItem>
    </Timeline>
  );
}