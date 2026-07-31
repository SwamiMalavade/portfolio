import {
  Typography,
  Box,
  Chip,
  Stack,
  Grid,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionWrapper from './SectionWrapper';

const PROJECTS = [
  {
    title: 'AI Task Organizer',
    tagline: 'Intelligent task management with AI-powered categorization',
    problem:
      'Traditional task managers require manual categorization and prioritization, which is tedious and inconsistent for busy professionals.',
    solution:
      'Built an intelligent task management app that allows users to enter tasks in natural language. The application automatically extracts, categorizes, and prioritizes tasks using Cohere AI, with secure JWT authentication.',
    impact: 'Responsive UI with React and Material-UI, Node.js backend with PostgreSQL, enabling seamless AI-powered task management.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'JWT', 'Cohere AI'],
    links: {
      github: 'https://github.com/SwamiMalavade/ai-task-organizer',
    },
  },
  {
    title: 'Team Update Summarizer',
    tagline: 'AI-powered daily team update analysis',
    problem:
      'Team leads struggle to manually parse through unstructured daily updates to identify blockers, wins, and upcoming goals across team members.',
    solution:
      'Built an AI-powered application that automatically identifies blockers, wins, and upcoming goals from unstructured text. Users view a structured summary and overall team status through a clean React dashboard.',
    impact: 'Type-safe backend API with AI processing using Cohere AI, enabling faster and more accurate team status tracking.',
    tech: ['TypeScript', 'React', 'Node.js', 'REST', 'Cohere AI'],
    links: {
      github: 'https://github.com/SwamiMalavade/team-update-summarizer',
    },
  },
  {
    title: 'Code Security & Accessibility Scanner',
    tagline: 'AI-based code analysis for security and accessibility',
    problem:
      'Frontend code often has hidden security vulnerabilities like XSS risks, exposed secrets, and accessibility gaps such as missing labels and alt text that go unnoticed.',
    solution:
      'Built an AI-based tool that analyzes frontend code for security and accessibility issues. Generates a detailed checklist with severity levels and actionable recommendations using Cohere AI-powered analysis.',
    impact: 'Helps developers proactively identify and fix security vulnerabilities and accessibility issues before deployment.',
    tech: ['TypeScript', 'React', 'NestJS', 'REST', 'Cohere AI'],
    links: {
      github: 'https://github.com/SwamiMalavade/code-scanner',
    },
  },
  {
    title: 'Raj Caterers',
    tagline: 'Live static website for a catering business',
    problem:
      'A local catering service needed an online presence to showcase its menu and offerings so customers could browse products without calling in.',
    solution:
      'Built and deployed a responsive static website with a clean, mobile-friendly layout to present the catering menu and services, using Bootstrap for consistent, fast-loading UI components.',
    impact: 'Live in production, giving the business a public storefront customers can browse to view offerings before placing an order.',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    links: {
      live: 'https://raj-caterers.com/',
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Side projects and freelance work showcasing my skills."
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(255,255,255,0.01)'
            : 'rgba(0,0,0,0.015)',
      }}
    >
      <Grid container spacing={3}>
        {PROJECTS.map((project, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={project.title}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 2.5, sm: 3, md: 3.5 },
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.main"
                  sx={{ fontWeight: 500, mb: 2 }}
                >
                  {project.tagline}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.7rem',
                    }}
                  >
                    Problem
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {project.problem}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.7rem',
                    }}
                  >
                    Solution
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {project.solution}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.7rem',
                    }}
                  >
                    Impact
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {project.impact}
                  </Typography>
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 2, mt: 'auto' }}>
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontSize: '0.72rem',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.06)'
                            : 'rgba(0,0,0,0.04)',
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1}>
                  {project.links.github && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                      href={project.links.github}
                      target="_blank"
                      sx={{ fontSize: '0.8rem' }}
                    >
                      Code
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      size="small"
                      startIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                      href={project.links.live}
                      target="_blank"
                      sx={{ fontSize: '0.8rem' }}
                    >
                      Live Site
                    </Button>
                  )}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
