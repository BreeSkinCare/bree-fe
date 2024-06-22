import React from 'react';
import { Container, Divider, Typography } from '@mui/material';
import { SectionWrapper } from '../hoc';

const PrivacyPolicy = () => {
  return (
    <Container style={{width:800}}>
      <Typography variant="h2" gutterBottom>Privacy Policy</Typography>
      <Typography variant="subtitle1" gutterBottom>Effective date: May 24, 2023</Typography>
      
      <Typography variant="h4" gutterBottom>Introduction</Typography>
      <Typography paragraph>
        Your privacy is our top priority. This Privacy Policy outlines how BreezyBeauty Inc. and its affiliated entities (“Bree” or “we” or “us”) complies with the General Data Protection Regulation (“GDPR”), the EU GDPR and other applicable data protection laws and regulations. It explains how Bree, Your Personal Skin Assistant (our “Conversational Skin Health Assistant”), accessible through www.bree.health (the “Website”) and other communication modes (such as Instagram and WhatsApp) that link to this Privacy Policy, collect, use, and protect your personal information across all our services (collectively, the "Services").
      </Typography>
      
      <Divider sx={{ marginY: 2 }} />
      
      <Typography variant="h4" gutterBottom>Our Fundamental Principles</Typography>
      <Typography paragraph>
        Conversational Assistant stands at the cutting edge of technology. We hold the conviction that this nascent technology will revolutionize our interaction with computers and reshape our daily lives. Our ultimate objective is to harness the power of AI to provide in-depth knowledge through individualized information about skin health, delivered by a conversational assistant that is trustworthy, intelligent, friendly, and engaging.
      </Typography>
      <Typography paragraph>
        Our Privacy Policy is a testament to our conviction that to realize this objective and to ensure the technology is genuinely beneficial for everyone, we need an in-depth comprehension of how our users communicate and engage with Bree. As the interaction with Bree continues, it will equip us with substantial knowledge to improve and make it more valuable to you.
      </Typography>
      <Typography paragraph>
        We are committed to providing users with complete transparency regarding our data handling practices, particularly when it comes to individual user data. This Privacy Policy is an essential component of that commitment. It outlines the data we collect, our security measures, and how we utilize that data to enhance our Services for all users. The following points summarize our policy:
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h4" gutterBottom>Information We Collect</Typography>
      <Typography paragraph>
        While utilizing our Services, we collect the following types of information:
      </Typography>
      <Typography paragraph>
        Essential data such as your name, phone number, email address, and IP address to operate the platform, enhance user experience, guarantee user safety, and adhere to relevant laws and regulations.
      </Typography>
      <Typography paragraph>
        At a second level, in order to build your USI* we gather individualized data such as:
      </Typography>
      <ul>
        <li style={{fontFamily:'Roboto'}}><strong style={{fontFamily:'Roboto'}}>User Engagement:</strong> Total Conversations Exchanged, Daily/Monthly Active Users, Average Session Length, Sessions Longer than 1 Hour, Week Over Week Retention</li>
        <li style={{fontFamily:'Roboto'}}><strong style={{fontFamily:'Roboto'}}>Processes & Channels:</strong> Processes Taken by Users, Average Processes not Completed per User, Users per Channel (Website/Instagram/WhatsApp), Active Users per Channel, Average Session Duration per Channel</li>
        <li style={{fontFamily:'Roboto'}}><strong style={{fontFamily:'Roboto'}}>Health and Lifestyle Data:</strong> Skin Type, Conditions, and Concerns, Diet, Exercise, and Stress Levels</li>
        <li style={{fontFamily:'Roboto'}}><strong style={{fontFamily:'Roboto'}}>Outcome Measures:</strong> Changes in Skin Health</li>
        <li style={{fontFamily:'Roboto'}}><strong style={{fontFamily:'Roboto'}}>User Feedback:</strong> Feedback on efficacy and chatbot experience, Areas of Concerns Most Addressed</li>
      </ul>

      <Divider sx={{ marginY: 2 }} />

      <Typography paragraph>
        We use your information to communicate with you regarding your account and provide individualized skin health advice and information based on your inquiries and shared concerns. If you choose to log in to our Services using a third-party account, such as your Facebook, or Google login, we may receive your name and email address from the third-party account provider to facilitate your access to our Services.
      </Typography>
      <Typography paragraph>
        Our utmost priority is to maintain the confidentiality and security of your conversations with Bree, and we assure you that we will never sell or share your data for advertising or marketing purposes. We have stringent internal regulations in place for the usage and access to user data.
      </Typography>
      <Typography paragraph>
        You agree to adhere to our Acceptable Use policy, which prohibits engaging in harmful, abusive, or unlawful discussions with Bree. It is also prohibited to attempt to circumvent our security measures, or inquire about the underlying models, algorithms, prompts, or source code of Bree. Violating these guidelines may result in permanent suspension, without the possibility of reinstatement.
      </Typography>
      <Typography paragraph>
        If you are below the age of 16, you are not authorized to use Bree.
      </Typography>
      <Typography paragraph>
        Bree may occasionally provide inaccurate information or misinterpret your queries. To ensure the reliability of the information provided, we strongly recommend verifying the facts independently or consulting a healthcare professional when necessary. Bree is not intended to replace the advice of trained health professionals.
      </Typography>
      
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h4" gutterBottom>Information We Automatically Collect</Typography>
      <Typography paragraph>
        Information you provide to us: Personal details, including your full name, email address, and contact number.
      </Typography>
      <Typography paragraph>
        The substance and related data of all communications, including questions, concerns, or messages you share through our Services or directly to BreezyBeauty Inc.
      </Typography>
      <Typography paragraph>
        Communications that we exchange with you, including when you respond to our surveys or contact us with inquiries, feedback or otherwise.
      </Typography>
      <Typography paragraph>
        Additional data that is not explicitly mentioned here, which we will utilize as outlined in this Privacy Policy or as revealed at the time of collection.
      </Typography>

      {/* Continue to format the remaining sections similarly */}
      
    </Container>
  );
};

export default SectionWrapper(PrivacyPolicy, "PrivacyPolicy");