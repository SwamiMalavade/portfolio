import { Typography, Box, Chip, Stack, Grid } from '@mui/material';
import SectionWrapper from './SectionWrapper';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'ReactJS', 'JavaScript', 'TypeScript', 'Redux', 'HTML5', 'CSS3', 'Angular', 'MySQL', 'NoSQL'],
    color: '#2563EB',
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['ExpressJS', 'Spring Boot', 'Node.js', 'NestJS', 'Bootstrap 5', 'Material UI (MUI)', 'JWT'],
    color: '#7C3AED',
  },
  {
    title: 'Databases & Cloud',
    skills: ['PostgreSQL', 'S3 Bucket', 'Composable DataOps'],
    color: '#059669',
  },
  {
    title: 'Tools & Practices',
    skills: ['Visual Studio Code', 'Cursor', 'Claude', 'Visual Studio', 'IntelliJ', 'PyCharm', 'Git', 'axe DevTools', 'Agile/Scrum', 'REST APIs'],
    color: '#D97706',
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const chipAnim = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with day-to-day."
    >
      <Grid container spacing={4}>
        {SKILL_CATEGORIES.map((cat) => (
          <Grid size={{ xs: 12, sm: 6 }} key={cat.title}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: 1,
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                height: '100%',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 2,
                  color: cat.color,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {cat.title}
              </Typography>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {cat.skills.map((skill) => (
                    <motion.div key={skill} variants={chipAnim}>
                      <Chip
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(255,255,255,0.06)'
                              : 'rgba(0,0,0,0.04)',
                          '&:hover': {
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'rgba(255,255,255,0.12)'
                                : 'rgba(0,0,0,0.08)',
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
