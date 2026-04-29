import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionWrapper({ id, title, subtitle, children, maxWidth = 'lg', sx = {} }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 8, md: 12 }, ...sx }}
    >
      <Container maxWidth={maxWidth}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          {title && (
            <Box sx={{ mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.4rem' }, mb: 1 }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
                  {subtitle}
                </Typography>
              )}
              <Box
                sx={{
                  width: 48,
                  height: 4,
                  borderRadius: 2,
                  mt: 2,
                  background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
                }}
              />
            </Box>
          )}
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}
