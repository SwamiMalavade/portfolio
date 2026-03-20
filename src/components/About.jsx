import { Typography, Box, Grid } from '@mui/material';
import SectionWrapper from './SectionWrapper';

const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '4', label: 'Companies' },
  { value: 'MSc', label: 'Computer Science' },
  { value: '3+', label: 'Side Projects' },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Developer, team player, problem-solver."
    >
      <Grid container spacing={6} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5 }}>
            I'm a Senior Software Developer with 4+ years of hands-on experience building
            scalable and responsive web applications using ReactJS, Redux, Node.js, ExpressJS,
            and NestJS. I've led small teams, owned end-to-end delivery of client projects,
            and consistently met timelines in fast-paced environments.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5 }}>
            I've worked across multiple domains including fintech, pharmaceutical, and insurance,
            delivering secure and user-focused solutions. My experience spans usability improvements,
            accessibility guidelines, and building intuitive UI using Material UI (MUI), along with
            backend development including role-based and column-level permission systems.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            I hold an MSc in Computer Science from Nowrosjee Wadia College, Pune. I'm comfortable
            working in Agile/Scrum environments with direct client interaction and have a strong
            interest in AI-powered applications, demonstrated through multiple side projects
            focused on automation, productivity, and security.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Grid container spacing={2}>
            {STATS.map((stat) => (
              <Grid size={{ xs: 6 }} key={stat.label}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: 1,
                    borderColor: 'divider',
                    textAlign: 'center',
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
