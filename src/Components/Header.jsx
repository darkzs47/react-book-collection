import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    Badge
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link, useLocation} from 'react-router-dom';
import MaterialUISwitch from "../MUI components/ThemeSwitch.jsx";
import SearchField from "../MUI components/SearchField.jsx";

const RouterPath = [
    {label: 'Главная', path: '/'},
    {label: 'Книга', path: '/book/1'},
    {label: 'Настройки', path: '/settings'},
];

const Header = () => {
    const location = useLocation();

    return (
        <AppBar position="static">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', background: 'black'}}>
                <Box sx={{display: 'flex', gap: 2}}>
                    <>
                        {RouterPath.map(item => (
                            <Button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                color={location.pathname === item.path ? 'secondary' : 'inherit'}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </>
                </Box>
                <Typography variant="h6" component="div">
                    Моя библиотека
                </Typography>

                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <SearchField/>
                    <Badge badgeContent={4} color="error" sx={{mx: '20px'}}>
                        <FavoriteIcon sx={{fontSize: 24}}/>
                    </Badge>
                    <Badge>
                        <MaterialUISwitch/>
                    </Badge>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;