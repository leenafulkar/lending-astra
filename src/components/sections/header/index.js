// // import * as React from "react";
// // import { useLocation } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   Typography,
// //   Box,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText,
// //   IconButton,
// //   Collapse,
// //   Avatar,
// // } from "@mui/material";
// // import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// // import logo from "../../../assets/astra-logo.jpeg";

// // const publisherManagementWithHeading = [
// //   {
// //     name: "Loan",
// //     items: [
// //       {
// //         name: "Loan",
// //         route: "/loan",
// //         icon: "AssessmentOutlinedIcon",
// //         submenu: [
// //           {
// //             name: "Personal Loan",
// //             route: "/loan/personal-loan",
// //             icon: "AssessmentOutlinedIconRepo1",
// //           },
// //           {
// //             name: "Auto Loan",
// //             route: "/loan/auto-loan",
// //             icon: "AssessmentOutlinedIconRepo2",
// //           },
// //         ],
// //       },
// //     ],
// //   },
// //   {
// //     name: "Business",
// //     items: [
// //       {
// //         name: "Business",
// //         route: "/business",
// //         icon: "AssessmentOutlinedIcon",
// //         submenu: [
// //           {
// //             name: "Business Loan",
// //             route: "/business/business-loan",
// //             icon: "AssessmentOutlinedIconRepo1",
// //           },
// //           {
// //             name: "Startup Business Loan",
// //             route: "/business/startup-business-loan",
// //             icon: "AssessmentOutlinedIconRepo2",
// //           },
// //           {
// //             name: "Working Capital Laon",
// //             route: "/business/working-capital-loan",
// //             icon: "NewSubmenuIcon",
// //           },
// //         ],
// //       },
// //     ],
// //   },

// //   {
// //     name: "Mortgage",
// //     items: [
// //       {
// //         name: "Mortgage",
// //         route: "/mortgage",
// //         icon: "AssessmentOutlinedIcon",
// //         submenu: [
// //           {
// //             name: "Mortgage Rates",
// //             route: "/mortgage/mortgage-rates",
// //             icon: "AssessmentOutlinedIconRepo1",
// //           },
// //           {
// //             name: "Home Equity Loan Rates",
// //             route: "/mortgage/home-quity-loan-rates",
// //             icon: "AssessmentOutlinedIconRepo2",
// //           },
// //           {
// //             name: "HELOC Rates",
// //             route: "/business/heloc-rates",
// //             icon: "NewSubmenuIcon",
// //           },
// //         ],
// //       },
// //     ],
// //   },
// //   // {
// //   //   items: [
// //   //     {
// //   //       name: "Buyers",
// //   //       route: "/buyers",
// //   //       icon: "ListAltOutlinedIcon",
// //   //     },
// //   //     {
// //   //       name: "Campaigns",
// //   //       route: "/campaigns",
// //   //       icon: "CampaignOutlinedIcon",
// //   //     },
// //   //     {
// //   //       name: "Buyer Labels",
// //   //       route: "/buyer-labels",
// //   //       icon: "LabelIconCm1",
// //   //     },
// //   //   ],
// //   // },
// // ];

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState({
// //     reportsAndAnalytics: -1,
// //     business: -1,
// //   });

// //   const handleMenuItemClick = (index) => {
// //     // Handle menu item click if needed
// //   };

// //   const activeStyle = {
// //     width: "233px",
// //     height: "40px",
// //     margin: "0px 5px 5px 5px",
// //     background: "#2A4BC0",
// //     color: "white",
// //     gap: "4.17px",

// //     borderRadius: "5px",
// //     "&:hover": {
// //       background: "#4a72ff",
// //     },
// //   };

// //   const textActiveStyle = {
// //     color: "#fff !important",
// //     fontSize: "14px",

// //     "& .MuiListItemText-primary": {
// //       color: "#fff !important",
// //     },
// //   };

// //   const toggleSubMenu = (menu, groupIndex) => {
// //     setOpenSubMenuIndex((prevState) => ({
// //       ...prevState,
// //       [menu]: prevState[menu] === groupIndex ? -1 : groupIndex,
// //     }));
// //   };

// //   return (
// //     <Box className="sideNavBox" sx={{ overflow: "auto" }}>
// //       <List
// //         className="sideNav"
// //         sx={{
// //           display: "flex",
// //           background: "#f1f1f1",
// //           position: "absolute",
// //           right: "0px",
// //           left: "0px",
// //           padding: "0px",
// //           justifyContent: "space-between",
// //         }}
// //       >
// //         <Box sx={{ display: "flex" }}>
// //           <Box sx={{ px: 3 }}>
// //             <img src={logo} style={{ width: "200px" }} />
// //           </Box>
// //           {publisherManagementWithHeading?.map((group, groupIndex) => (
// //             <React.Fragment key={groupIndex}>
// //               {group?.items?.map((item, index) => (
// //                 <React.Fragment key={item.name}>
// //                   <ListItem
// //                     disablePadding
// //                     className="sideMenuItem"
// //                     sx={{ width: "150px" }}
// //                     onClick={() => {
// //                       if (group?.name === "Loan" && index === 0) {
// //                         toggleSubMenu("reportsAndAnalytics");
// //                       } else if (group?.name === "Business" && index === 0) {
// //                         toggleSubMenu("business");
// //                       } else if (group?.name === "Mortgage" && index === 0) {
// //                         toggleSubMenu("mortgage");
// //                       } else {
// //                         navigate(item.route);
// //                       }
// //                     }}
// //                   >
// //                     <ListItemButton
// //                       className="sideNavButton"
// //                       sx={location.pathname === item.route ? activeStyle : ""}
// //                     >
// //                       <ListItemText
// //                         sx={
// //                           location.pathname === item?.route
// //                             ? textActiveStyle
// //                             : ""
// //                         }
// //                         primary={item?.name}
// //                         className="sideMenuItem"
// //                       />
// //                       {group?.name === "Loan" && index === 0 && (
// //                         <IconButton
// //                           onClick={(event) => {
// //                             event.stopPropagation();
// //                             toggleSubMenu("reportsAndAnalytics", groupIndex); // Pass groupIndex here
// //                           }}
// //                         >
// //                           {openSubMenuIndex.reportsAndAnalytics ===
// //                           groupIndex ? (
// //                             <ExpandLessIcon />
// //                           ) : (
// //                             <ExpandMoreIcon />
// //                           )}
// //                         </IconButton>
// //                       )}
// //                       {group?.name === "Business" && index === 0 && (
// //                         <IconButton
// //                           onClick={(event) => {
// //                             event.stopPropagation();
// //                             toggleSubMenu("business", groupIndex); // Pass groupIndex here
// //                           }}
// //                         >
// //                           {openSubMenuIndex.business === groupIndex ? (
// //                             <ExpandLessIcon />
// //                           ) : (
// //                             <ExpandMoreIcon />
// //                           )}
// //                         </IconButton>
// //                       )}
// //                       {group?.name === "Mortgage" && index === 0 && (
// //                         <IconButton
// //                           onClick={(event) => {
// //                             event.stopPropagation();
// //                             toggleSubMenu("mortgage", groupIndex); // Pass groupIndex here
// //                           }}
// //                         >
// //                           {openSubMenuIndex.mortgage === groupIndex ? (
// //                             <ExpandLessIcon />
// //                           ) : (
// //                             <ExpandMoreIcon />
// //                           )}
// //                         </IconButton>
// //                       )}
// //                     </ListItemButton>
// //                   </ListItem>
// //                   {item.submenu && (
// //                     <Collapse
// //                       in={
// //                         (group.name === "Loan" &&
// //                           openSubMenuIndex.reportsAndAnalytics ===
// //                             groupIndex) ||
// //                         (group.name === "Business" &&
// //                           openSubMenuIndex.business === groupIndex) ||
// //                         (group.name === "Mortgage" &&
// //                           openSubMenuIndex.mortgage === groupIndex)
// //                       }
// //                       timeout="auto"
// //                       unmountOnExit
// //                       sx={{ position: "relative" }}
// //                     >
// //                       <List
// //                         component="div"
// //                         disablePadding
// //                         sx={{
// //                           position: "absolute",
// //                           top: "65px",
// //                           right: "20px",
// //                           width: "150px",
// //                         }}
// //                       >
// //                         {item.submenu.map((subItem, subIndex) => (
// //                           <ListItem
// //                             key={subItem.name}
// //                             onClick={() => navigate(subItem.route)}
// //                             style={{
// //                               background: "#f1f1f1",
// //                               padding: "0px",
// //                               margin: "0px",
// //                             }}
// //                           >
// //                             <ListItemButton
// //                               className="sideNavIcon"
// //                               sx={
// //                                 location.pathname === subItem.route
// //                                   ? activeStyle
// //                                   : ""
// //                               }
// //                             >
// //                               <ListItemText
// //                                 primary={subItem.name}
// //                                 className="sideMenuItem"
// //                                 sx={
// //                                   location.pathname === subItem.route
// //                                     ? textActiveStyle
// //                                     : ""
// //                                 }
// //                               />
// //                             </ListItemButton>
// //                           </ListItem>
// //                         ))}
// //                       </List>
// //                     </Collapse>
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </React.Fragment>
// //           ))}
// //         </Box>
// //         <Box sx={{ px: 3 }}>
// //           <ul
// //             style={{
// //               listStyle: "none",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <li style={{ padding: "20px 10px" }}>Sign up</li>
// //             <li>Log in</li>
// //             <li>
// //               <Box sx={{ px: 2 }}>
// //                 <Avatar>N</Avatar>
// //               </Box>
// //             </li>
// //           </ul>
// //         </Box>
// //       </List>
// //     </Box>
// //   );
// // };

// // export default Header;

// import * as React from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   IconButton,
//   Collapse,
//   Avatar,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../../assets/astra-logo.jpeg";

// const publisherManagementWithHeading = [
//   {
//     name: "Loan",
//     items: [
//       {
//         name: "Loan",
//         route: "/loan",
//         icon: "AssessmentOutlinedIcon",
//         submenu: [
//           {
//             name: "Personal Loan",
//             route: "/loan/personal-loan",
//             icon: "AssessmentOutlinedIconRepo1",
//           },
//           {
//             name: "Auto Loan",
//             route: "/loan/auto-loan",
//             icon: "AssessmentOutlinedIconRepo2",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Business",
//     items: [
//       {
//         name: "Business",
//         route: "/business",
//         icon: "AssessmentOutlinedIcon",
//         submenu: [
//           {
//             name: "Business Loan",
//             route: "/business/business-loan",
//             icon: "AssessmentOutlinedIconRepo1",
//           },
//           {
//             name: "Startup Business Loan",
//             route: "/business/startup-business-loan",
//             icon: "AssessmentOutlinedIconRepo2",
//           },
//           {
//             name: "Working Capital Laon",
//             route: "/business/working-capital-loan",
//             icon: "NewSubmenuIcon",
//           },
//         ],
//       },
//     ],
//   },

//   {
//     name: "Mortgage",
//     items: [
//       {
//         name: "Mortgage",
//         route: "/mortgage",
//         icon: "AssessmentOutlinedIcon",
//         submenu: [
//           {
//             name: "Mortgage Rates",
//             route: "/mortgage/mortgage-rates",
//             icon: "AssessmentOutlinedIconRepo1",
//           },
//           {
//             name: "Home Equity Loan Rates",
//             route: "/mortgage/home-quity-loan-rates",
//             icon: "AssessmentOutlinedIconRepo2",
//           },
//           {
//             name: "HELOC Rates",
//             route: "/business/heloc-rates",
//             icon: "NewSubmenuIcon",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState({
//     reportsAndAnalytics: -1,
//     business: -1,
//   });
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

//   const handleMenuItemClick = (index) => {
//     // Handle menu item click if needed
//   };

//   const activeStyle = {
//     width: "233px",
//     height: "40px",
//     margin: "0px 5px 5px 5px",
//     background: "#2A4BC0",
//     color: "white",
//     gap: "4.17px",

//     borderRadius: "5px",
//     "&:hover": {
//       background: "#4a72ff",
//     },
//   };

//   const textActiveStyle = {
//     color: "#fff !important",
//     fontSize: "14px",

//     "& .MuiListItemText-primary": {
//       color: "#fff !important",
//     },
//   };

//   const toggleSubMenu = (menu, groupIndex) => {
//     setOpenSubMenuIndex((prevState) => ({
//       ...prevState,
//       [menu]: prevState[menu] === groupIndex ? -1 : groupIndex,
//     }));
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <Box className="sideNavBox" sx={{ overflow: "auto" }}>
//       <List
//         className={`sideNav ${mobileMenuOpen ? "mobileMenuOpen" : ""}`}
//         sx={{
//           display: "flex",
//           background: "#f1f1f1",
//           position: "absolute",
//           right: "0px",
//           left: "0px",
//           padding: "0px",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box sx={{ display: "flex" }}>
//           <Box sx={{ px: 3 }}>
//             <img src={logo} style={{ width: "200px" }} />
//           </Box>
//           <IconButton
//             className="menuIcon"
//             sx={{ display: { sm: "none", xs: "flex" } }}
//             onClick={toggleMobileMenu}
//           >
//             <MenuIcon />
//           </IconButton>
//           {publisherManagementWithHeading?.map((group, groupIndex) => (
//             <React.Fragment key={groupIndex}>
//               {group?.items?.map((item, index) => (
//                 <React.Fragment key={item.name}>
//                   <ListItem
//                     disablePadding
//                     className="sideMenuItem"
//                     sx={{ width: "150px" }}
//                     onClick={() => {
//                       if (group?.name === "Loan" && index === 0) {
//                         toggleSubMenu("reportsAndAnalytics");
//                       } else if (group?.name === "Business" && index === 0) {
//                         toggleSubMenu("business");
//                       } else if (group?.name === "Mortgage" && index === 0) {
//                         toggleSubMenu("mortgage");
//                       } else {
//                         navigate(item.route);
//                       }
//                     }}
//                   >
//                     <ListItemButton
//                       className="sideNavButton"
//                       sx={location.pathname === item.route ? activeStyle : ""}
//                     >
//                       <ListItemText
//                         sx={
//                           location.pathname === item?.route
//                             ? textActiveStyle
//                             : ""
//                         }
//                         primary={item?.name}
//                         className="sideMenuItem"
//                       />
//                       {group?.name === "Loan" && index === 0 && (
//                         <IconButton
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             toggleSubMenu("reportsAndAnalytics", groupIndex); // Pass groupIndex here
//                           }}
//                         >
//                           {openSubMenuIndex.reportsAndAnalytics ===
//                           groupIndex ? (
//                             <ExpandLessIcon />
//                           ) : (
//                             <ExpandMoreIcon />
//                           )}
//                         </IconButton>
//                       )}
//                       {group?.name === "Business" && index === 0 && (
//                         <IconButton
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             toggleSubMenu("business", groupIndex); // Pass groupIndex here
//                           }}
//                         >
//                           {openSubMenuIndex.business === groupIndex ? (
//                             <ExpandLessIcon />
//                           ) : (
//                             <ExpandMoreIcon />
//                           )}
//                         </IconButton>
//                       )}
//                       {group?.name === "Mortgage" && index === 0 && (
//                         <IconButton
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             toggleSubMenu("mortgage", groupIndex); // Pass groupIndex here
//                           }}
//                         >
//                           {openSubMenuIndex.mortgage === groupIndex ? (
//                             <ExpandLessIcon />
//                           ) : (
//                             <ExpandMoreIcon />
//                           )}
//                         </IconButton>
//                       )}
//                     </ListItemButton>
//                   </ListItem>
//                   {item.submenu && (
//                     <Collapse
//                       in={
//                         (group.name === "Loan" &&
//                           openSubMenuIndex.reportsAndAnalytics ===
//                             groupIndex) ||
//                         (group.name === "Business" &&
//                           openSubMenuIndex.business === groupIndex) ||
//                         (group.name === "Mortgage" &&
//                           openSubMenuIndex.mortgage === groupIndex)
//                       }
//                       timeout="auto"
//                       unmountOnExit
//                       sx={{ position: "relative" }}
//                     >
//                       <List
//                         component="div"
//                         disablePadding
//                         sx={{
//                           position: "absolute",
//                           top: "65px",
//                           right: "20px",
//                           width: "150px",
//                         }}
//                       >
//                         {item.submenu.map((subItem, subIndex) => (
//                           <ListItem
//                             key={subItem.name}
//                             onClick={() => navigate(subItem.route)}
//                             style={{
//                               background: "#f1f1f1",
//                               padding: "0px",
//                               margin: "0px",
//                             }}
//                           >
//                             <ListItemButton
//                               className="sideNavIcon"
//                               sx={
//                                 location.pathname === subItem.route
//                                   ? activeStyle
//                                   : ""
//                               }
//                             >
//                               <ListItemText
//                                 primary={subItem.name}
//                                 className="sideMenuItem"
//                                 sx={
//                                   location.pathname === subItem.route
//                                     ? textActiveStyle
//                                     : ""
//                                 }
//                               />
//                             </ListItemButton>
//                           </ListItem>
//                         ))}
//                       </List>
//                     </Collapse>
//                   )}
//                 </React.Fragment>
//               ))}
//             </React.Fragment>
//           ))}
//         </Box>
//         <Box sx={{ px: 3 }}>
//           <ul
//             style={{
//               listStyle: "none",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <li style={{ padding: "20px 10px" }}>Sign up</li>
//             <li>Log in</li>
//             <li>
//               <Box sx={{ px: 2 }}>
//                 <Avatar>N</Avatar>
//               </Box>
//             </li>
//           </ul>
//         </Box>
//       </List>
//     </Box>
//   );
// };

// export default Header;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import logo from "../../../assets/logo.svg";

// const pages = ["Loans", "Business", "Mortgages", "CreditCard", "Insurance"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{ background: "#101f30" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <img src={logo} alt="log" width="120" height="70" />
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <img src={logo} alt="log" width="120" height="70" />
//           </Typography>
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: {
//                 xs: "none",
//                 md: "flex",
//               },
//             }}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{
//                   my: 2,
//                   color: "white",
//                   display: "block",
//                   fontSize: "15px",
//                   fontWeight: 700,
//                   color: "#fff",
//                   textTransform: "capitalize",
//                   // padding: "2px",
//                   // background: "0 0",
//                   border: 0,
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ display: { xs: "none", sm: "block" }, pr: 2 }}>
//             <Button
//               sx={{
//                 color: "#fff",
//                 fontSize: "15px",
//                 fontWeight: 700,
//                 textTransform: "capitalize",
//               }}
//             >
//               Signup
//             </Button>
//             <Button
//               sx={{
//                 color: "#fff",
//                 fontSize: "15px",
//                 fontWeight: 700,
//                 textTransform: "capitalize",
//               }}
//             >
//               Log in
//             </Button>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// function App() {
//   const [menuAnchorEls, setMenuAnchorEls] = useState([null, null, null]);
//   const [selectedItems, setSelectedItems] = useState([null, null, null]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleMenuClick = (event, index) => {
//     const newMenuAnchorEls = [...menuAnchorEls];
//     newMenuAnchorEls[index] = event.currentTarget;
//     setMenuAnchorEls(newMenuAnchorEls);
//   };

//   const handleMenuItemClick = (event, item, index) => {
//     const newSelectedItems = [...selectedItems];
//     newSelectedItems[index] = item;
//     setSelectedItems(newSelectedItems);
//     handleMenuClose(index);
//   };

//   const handleMenuClose = (index) => {
//     const newMenuAnchorEls = [...menuAnchorEls];
//     newMenuAnchorEls[index] = null;
//     setMenuAnchorEls(newMenuAnchorEls);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // Menu data
//   const menus = [
//     {
//       label: "Menu 1",
//       options: ["Option 1", "Option 2"],
//     },
//     {
//       label: "Menu 2",
//       options: ["Option 21", "Option 22"],
//     },
//     {
//       label: "Menu 3",
//       options: ["Option 31", "Option 32"],
//     },
//   ];

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Your App
//           </Typography>
//           <IconButton
//             color="inherit"
//             onClick={toggleMobileMenu}
//             sx={{ display: { xs: "block", sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {menus.map((menu, index) => (
//             <div key={index}>
//               <Button
//                 color="inherit"
//                 onClick={(event) => handleMenuClick(event, index)}
//                 endIcon={<ExpandMoreIcon />}
//                 sx={{ display: { xs: "none", sm: "inline-flex" } }}
//               >
//                 {menu.label}
//               </Button>
//               <Menu
//                 anchorEl={menuAnchorEls[index]}
//                 open={Boolean(menuAnchorEls[index])}
//                 onClose={() => handleMenuClose(index)}
//               >
//                 {menu.options.map((option, optionIndex) => (
//                   <MenuItem
//                     key={optionIndex}
//                     onClick={(event) =>
//                       handleMenuItemClick(event, option, index)
//                     }
//                     sx={{
//                       backgroundColor:
//                         selectedItems[index] === option ? "red" : "inherit",
//                     }}
//                   >
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </div>
//           ))}
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         anchor="left"
//         open={mobileMenuOpen}
//         onClose={() => setMobileMenuOpen(false)}
//       >
//         <List>
//           {menus.map((menu, index) => (
//             <ListItem key={index} button>
//               <ListItemText primary={menu.label} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import logo from "../../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function Header() {
  const [menuAnchorEls, setMenuAnchorEls] = useState([null, null, null]);
  const [selectedItems, setSelectedItems] = useState([null, null, null]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  const handleMenuClick = (event, index) => {
    const newMenuAnchorEls = [...menuAnchorEls];
    newMenuAnchorEls[index] = event.currentTarget;
    setMenuAnchorEls(newMenuAnchorEls);
    setActiveMobileMenu(index);
  };

  const handleMenuItemClick = (event, item, index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = item;
    setSelectedItems(newSelectedItems);
    handleMenuClose(index);
  };

  const handleMenuClose = (index) => {
    const newMenuAnchorEls = [...menuAnchorEls];
    newMenuAnchorEls[index] = null;
    setMenuAnchorEls(newMenuAnchorEls);
    setActiveMobileMenu(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = (index) => {
    if (activeMobileMenu === index) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setMobileMenuOpen(true);
      setActiveMobileMenu(index);
    }
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Menu dataLoans

  // const menus = [
  //   {
  //     label: "Loans",
  //     options: [
  //       "Personal Loans",
  //       "Debt Consolidation Loans",
  //       "Loans for Bad Credit",
  //       "Auto Loans",
  //       "Auto Loan Refinance",
  //       "Student Loans",
  //       "Student Loan Refinance",
  //     ],
  //   },
  //   {
  //     label: "Business",
  //     options: ["Option 21", "Option 22"],
  //   },
  //   {
  //     label: "Mortgages",
  //     options: ["Option 31", "Option 32"],
  //   },
  // ];
  const menus = [
    {
      label: "Loans",
      options: [
        { name: "Personal Loans", to: "/personal-loan" },
        { name: "Debt Consolidation Loans", to: "/debt-consolidation" },
        { name: "Loans for Bad Credit", to: "/loan-for-bad-credit-score" },
        { name: "Auto Loans", to: "/auto-loans" },
        { name: "Auto Loan Refinance", to: "/auto-loan-refinance" },
        { name: "Student Loans", to: "/student-loans" },
        { name: "Student Loan Refinance", to: "/student-loan-refinance" },
      ],
    },
    {
      label: "Business",
      options: [
        { name: "Option 21", to: "/option-21" },
        { name: "Option 22", to: "/option-22" },
      ],
    },
    {
      label: "Mortgages",
      options: [
        { name: "Option 31", to: "/option-31" },
        { name: "Option 32", to: "/option-32" },
      ],
    },
  ];

  return (
    <div>
      <AppBar position="static" sx={{ background: "#101f30" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 0, display: { xs: "block", sm: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: "32px", height: "32px" }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, justifyContent: { xs: "center", sm: "left" } }}
            display={"flex"}
            alignItems={"center"}
          >
            <Link to={"/"}>
              <img
                src={logo}
                alt="log"
                width="140"
                height="70"
                style={{ paddingRight: "20px" }}
              />
            </Link>
            {/* {menus.map((menu, index) => (
              <div key={index}>
                <Button
                  color="inherit"
                  onClick={(event) => handleMenuClick(event, index)}
                  endIcon={<ExpandMoreIcon />}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline-flex",
                      paddingLeft: "20px",
                    },
                  }}
                >
                  {menu.label}
                </Button>
                <Menu
                  anchorEl={menuAnchorEls[index]}
                  open={
                    activeMobileMenu === index || Boolean(menuAnchorEls[index])
                  }
                  onClose={() => handleMenuClose(index)}
                >
                  {menu.options.map((option, optionIndex) => (
                    <MenuItem
                      key={optionIndex}
                      onClick={(event) =>
                        handleMenuItemClick(event, option, index)
                      }
                      // sx={{
                      //   backgroundColor:
                      //     selectedItems[index] === option ? "red" : "inherit",
                      // }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))} */}

            {menus.map((menu, index) => (
              <div key={index}>
                <Button
                  color="inherit"
                  onClick={(event) => handleMenuClick(event, index)}
                  endIcon={<ExpandMoreIcon />}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline-flex",
                      paddingLeft: "20px",
                      textTransform: "capitalize",
                    },
                  }}
                >
                  {menu.label}
                </Button>
                <Menu
                  anchorEl={menuAnchorEls[index]}
                  open={
                    activeMobileMenu === index || Boolean(menuAnchorEls[index])
                  }
                  onClose={() => handleMenuClose(index)}
                >
                  {menu.options.map((option, optionIndex) => (
                    <MenuItem
                      sx={{ listStyle: "none", textTransform: "capitalize" }}
                      key={optionIndex}
                      onClick={(event) =>
                        handleMenuItemClick(event, option, index)
                      }
                    >
                      <Link to={option.to}>{option.name}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => toggleMobileMenu(null)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" }, pr: 2 }}>
            <Button
              sx={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Signup
            </Button>
            <Button
              sx={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Log in
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: "32px", height: "32px" }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        BackdropProps={{ invisible: true }}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#101f30",
            color: "#fff",
            top: "80px",
            width: "300px",
          },
        }}
      >
        <List>
          {menus.map((menu, index) => (
            <ListItem
              key={index}
              button
              onClick={() => toggleMobileMenu(index)}
            >
              <ListItemText primary={menu.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
