import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewNoteForm from "../NewNotes/NewNoteForm";
import { useEffect, useState, useContext } from "react";
import NotePage from "../Note/Note";
import { NoteContext } from "../../NoteContext";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  CssBaseline,
  IconButton,
  Link,
  ClickAwayListener,
  AppBar,
  Drawer,
  Divider,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "black",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  //click away on web page

  const handleClickAway = () => {
    setOpen(false);
  };
  //on Click on icon
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const newNoteContext = useContext(NoteContext);
  
  useEffect(() => {
    newNoteContext.fetchNotes();
  }, []);

  return (
    <Router>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography style={{ flexGrow: 1 }} variant="h6" noWrap>
                <Link href="/" variant="h5" color="default">
                  <Box letterSpacing={12} m={1}>
                    Notes
                  </Box>
                </Link>
              </Typography>
              <Link href="/newentry" variant="h6" color="default">
                <Box m={1} textAlign="right">
                  Write new entry
                </Box>
              </Link>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {newNoteContext.notes.map((entry) => {
                return (
                  <ListItem button onClick={() => {}} key={entry.id}>
                    <ListItemText>
                      <Link component={RouterLink} to={`/note/${entry.id}`}>
                        {entry.title}
                      </Link>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>

          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />

            <Switch>
              <Route exact path="/newentry" component={NewNoteForm} />

              <Route exact path="/note/:id" component={NotePage} />
            </Switch>
          </main>
        </div>
      </ClickAwayListener>
    </Router>
  );
}

export default App;
