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
    product: 'Multiple Client Projects — Fintech, Pharma',
    tech: ['ReactJS', 'Redux', 'NestJS', 'ExpressJS', 'Node.js', 'MUI', 'MySQL'],
    bullets: [
      'Worked on multiple client projects using ReactJS, Redux, ExpressJS, and Material UI (MUI) to build scalable and responsive web applications.',
      'Led a team of 2 developers and successfully delivered a Developer Portal for a fintech client, taking end-to-end ownership of a mini project.',
      'Drove web accessibility implementation by enforcing WCAG guidelines and leveraging axe DevTools, ensuring ADA compliance and significantly enhancing usability for users with disabilities.',
      'Proactively ensured the Developer Portal was ADA-compliant, improving accessibility and overall user experience.',
      'For a fintech client, gained domain expertise in cheque processing workflows and integrated a physical cheque scanner using the Silver Bullet driver for API-based cheque processing.',
      'Developed a learning portal for a pharmaceutical client, enabling secure login, training content access, and product update visibility.',
      'Actively participated in daily Scrum ceremonies with clients, ensuring clear communication, requirement alignment, and timely delivery.',
      'Contributed to backend development using NestJS, implementing a column-level permission system with MySQL to enforce fine-grained data access control.',
    ],
  },
  {
    company: 'LMV IT Solutions',
    role: 'Frontend Developer',
    location: 'India',
    period: 'Mar 2023 – Jun 2023',
    product: 'Insurance Portal — Built from Scratch',
    tech: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    bullets: [
      'Collaborated with cross-functional team members to build an insurance portal from scratch, contributing to core UI development and feature implementation.',
      'Developed and enhanced user-facing pages using ReactJS, HTML5, CSS3, JavaScript, and Bootstrap 5, ensuring responsive and user-friendly design.',
      'Modified existing components based on evolving business requirements, including content updates, layout changes, and functionality enhancements.',
      'Worked closely with stakeholders and internal teams to track feature requests, address issues, and provide regular status updates on development progress.',
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
  {
    company: 'India SoftTech (Internship)',
    role: 'Web Developer',
    location: 'India',
    period: 'Jan 2020 – Sept 2020',
    product: 'Sai Packaging — Digitized Packaging Workflows',
    tech: ['Web Development'],
    bullets: [
      'Designed and developed a Sai Packaging web application to digitize packaging workflows and significantly reduce manual paperwork.',
      'Built and maintained material information databases supporting packaging needs across electronics, food, and other industries.',
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
                  alignItems={{ sm: 'center' }}
                  sx={{ mb: 1 }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.15rem' }}>
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{ fontWeight: 600 }}
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

                <Box component="ul" sx={{ pl: 2.5, mb: 2 }}>
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
