import {
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SectionWrapper from './SectionWrapper';

const EXPERIENCES = [
  {
    company: 'IncubXperts Techno Consulting Pvt Ltd',
    role: 'Sr. Software Developer',
    location: 'Pune, India',
    period: 'Mar 2024 – Present',
    product: 'Multiple Client Projects — Fintech, Pharma, Auto Parts',
    tech: ['ReactJS', 'Redux', 'Java', 'Spring Boot', 'TypeScript', 'NestJS', 'ExpressJS', 'Node.js', 'MySQL'],
    bullets: [
      'Worked on multiple client projects to build scalable and responsive web applications as follows.',
      'For a fintech client, gained domain expertise in cheque processing workflows and integrated a physical cheque scanner using the Silver Bullet driver for API-based cheque processing. Developed backend services using Java (Spring Boot) for cheque processing, including REST APIs for bulk uploads, status tracking, and validation workflows. Designed database schemas and integrated MySQL for storing cheque, batch, and transaction data efficiently.',
      'Led a team of 2 developers and successfully delivered a Developer Portal for a fintech client, taking end-to-end ownership of a mini project. Drove web accessibility implementation by enforcing WCAG guidelines and leveraging axe DevTools, ensuring ADA compliance and significantly enhancing usability for users with disabilities.',
      'Developed a learning portal for a pharmaceutical client, enabling secure login, training content access, and product update visibility.',
      'Built an inventory management system for an auto parts client using Java (Spring Boot), React, and NoSQL. Implemented region-specific search optimization in the database to improve query performance and data retrieval efficiency. Enhanced API performance by parallelizing database calls across categories and regions, significantly reducing latency and improving response times.',
    ],
  },
  {
    company: 'LMV IT Solutions',
    role: 'Software Developer',
    location: 'India',
    period: 'Mar 2023 – Jun 2023',
    product: 'Insurance Portal — Built from Scratch',
    tech: ['Java', 'Spring Boot', 'ReactJS', 'Redux', 'HTML5', 'CSS3', 'JavaScript', 'Material UI', 'MySQL'],
    bullets: [
      'Collaborated with cross-functional team members to build an insurance portal from scratch, contributing to core UI development and feature implementation.',
      'Built and integrated backend services using Java (Spring Boot), developing REST APIs for policy data and user management.',
      'Worked with MySQL for data persistence and implemented basic validation, error handling, and API integration with frontend.',
      'Developed and enhanced user-facing pages using ReactJS, HTML5, CSS3, JavaScript, and Bootstrap 5, ensuring responsive and user-friendly design.',
      'Modified existing components based on evolving business requirements, including content updates, layout changes, and functionality enhancements.',
    ],
  },
  {
    company: 'Infosys',
    role: 'Technical Executive',
    location: 'India',
    period: 'Jan 2021 – Jul 2022',
    product: 'Web Application Maintenance & Enhancement',
    tech: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    bullets: [
      'Enhanced and maintained existing web application pages by updating content, layouts, and functionality using ReactJS, HTML5, CSS3, JavaScript, and Bootstrap 5.',
      'Collaborated with cross-functional teams to analyze requirements, track ongoing change requests, and implement updates efficiently.',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="4+ years of hands-on experience across fintech, pharma, and insurance."
    >
      <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            left: 12,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'divider',
          }}
        />

        <Stack spacing={4}>
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transition: 'border-color 0.3s ease',
                  },
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    left: -44,
                    top: 28,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <WorkIcon sx={{ fontSize: 14, color: '#fff' }} />
                </Box>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ sm: 'flex-start' }}
                  sx={{ mb: 1 }}
                >
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: '1rem', sm: '1.15rem' } }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{ fontWeight: 600, wordBreak: 'break-word' }}
                    >
                      {exp.company} · {exp.location}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.8rem',
                      mt: { xs: 0.5, sm: 0 },
                    }}
                  >
                    {exp.period}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, fontStyle: 'italic' }}
                >
                  {exp.product}
                </Typography>

                <Box component="ul" sx={{ pl: { xs: 2, sm: 2.5 }, mb: 2 }}>
                  {exp.bullets.map((bullet, j) => (
                    <Box component="li" key={j} sx={{ mb: 0.8 }}>
                      <Typography variant="body2" color="text.secondary">
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={0.8}>
                  {exp.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'divider', fontSize: '0.75rem' }}
                    />
                  ))}
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </SectionWrapper>
  );
}
