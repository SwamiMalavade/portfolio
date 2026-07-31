import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-scroll';

const NAV_ITEMS = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawer = (
    <Box sx={{ width: 260, pt: 2 }}>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.to} disablePadding>
            <Link
              to={item.to}
              spy
              smooth
              offset={-70}
              duration={500}
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%' }}
            >
              <ListItemButton>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(11, 17, 32, 0.85)'
              : 'rgba(250, 251, 252, 0.85)',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.02em',
                flexGrow: 1,
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #60A5FA, #A78BFA)'
                    : 'linear-gradient(135deg, #2563EB, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              <Link to="hero" spy smooth offset={-70} duration={500}>
                Swami Malavade
              </Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {NAV_ITEMS.map((item) => (
                <Link key={item.to} to={item.to} spy smooth offset={-70} duration={500}>
                  <Button
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            <IconButton onClick={toggleDarkMode} sx={{ ml: 1 }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}
