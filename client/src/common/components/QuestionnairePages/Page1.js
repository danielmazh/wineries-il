// client\src\common\components\QuestionnairePages\Page1.js
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import heLocale from 'date-fns/locale/he';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

import LightModeIcon from '@mui/icons-material/LightMode'; 
import WbTwilightIcon from '@mui/icons-material/WbTwilight'; 
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AccessibleIcon from '@mui/icons-material/Accessible';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import hebrewLocale from 'date-fns/locale/he';
import Typography from '@mui/material/Typography';


import ResponsiveWrapper from '../styled-components/ResponsiveWrapper';
import { Grid } from '@mui/material';




const Page1 = ({
  formData,
  handleDateInputChange,
  handleOtherInputChange,
  validation,
  totalPages
}) => {


  // return (
  //   <ResponsiveWrapper style={{ width: "100%" }}>
  //   <div style={{ direction: 'rtl', textAlign: 'right' }}>
  //     {/* <h1 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0)' }}>-------------------------------------</h1> */}

  //     <div style={{ border: window.innerWidth >= 600 ? "1px solid gray" : "none", padding: "10px", borderRadius: "5px", position: 'relative' }}>

  //     <Box
  //       component="span"
  //       sx={{
  //         display: 'block',
  //         p: 1,
  //         m: 1,
  //         bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  //         color: (theme) =>
  //           theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
  //         border: '0px solid',
  //         borderColor: (theme) =>
  //           theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
  //         borderRadius: 2,
  //         fontSize: '0.875rem',
  //         fontWeight: '200',
  //       }}
  //     >
  //       <Typography align="center">
  //         עמוד 1 מתוך {totalPages}
  //       </Typography>
  //     </Box>

  return (
    <ResponsiveWrapper style={{ width: "100%" }}>
    <div style={{ direction: 'rtl', textAlign: 'right' }}>
      <div style={{ border: window.innerWidth >= 600 ? "1px solid gray" : "none", padding: "10px", borderRadius: "5px", position: 'relative' }}>

      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '0px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '200',
        }}
      >
        <Typography align="center">
          עמוד 1 מתוך {totalPages-1}
        </Typography>
      </Box>

      {/* <Grid item xs={12}>
        <h2 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0)' }}>-------------------------------------</h2>
      </Grid> */}
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

      <InputLabel htmlFor="TourArea">בחרו איזור לסיור היין שלכם</InputLabel>
      <FormControl fullWidth style={{ width: "100%" }}>

      <InputLabel htmlFor="TourArea">יש לבחור מהרשימה</InputLabel>
        <Select
          fullWidth
          id="TourArea"
          name="TourArea"
          value={formData.TourArea}
          onChange={handleOtherInputChange}
        >
          <MenuItem value="">יש לבחור מהרשימה</MenuItem>
          <MenuItem value="ירושלים">ירושלים</MenuItem>
        </Select>
        {validation.TourArea && <div className="error">{validation.TourArea}</div>}
        </FormControl>


      <br />
      <br />

      <InputLabel htmlFor="selectedDate">בחרו תאריך לסיור היין שלכם</InputLabel>
        <FormControl fullWidth style={{ width: "100%" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={heLocale}>
            <div style={{ display: 'flex', width: '100%' }}>
              <DatePicker
                style={{ width: '50%' }}
                fullWidth
                id="selectedDate"
                value={formData.selectedDate}
                onChange={handleDateInputChange}
                placeholderText="יש לבחור תאריך"
                dateFormat="dd/MM/yyyy"
                renderInput={(props) => <input {...props} />}
                locale={hebrewLocale}
              />
              
              <TextField
                style={{ width: '50%' }}
                disabled
                label="היום שנבחר"
                variant="outlined"
                value={
                  formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) : '➡'
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {/* <ArrowDropDownIcon /> */}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </LocalizationProvider>
        </FormControl>
        {validation.selectedDate && <div className="error">{validation.selectedDate}</div>}



      <br />
      <br />

      <InputLabel htmlFor="TourCount">בכמה יקבים ברצונכם לבקר </InputLabel>
        <FormControl fullWidth>
          <InputLabel htmlFor="TourCount">יש לבחור מהרשימה</InputLabel>
          <Select
            id="TourCount"
            name="TourCount"
            value={formData.TourCount}
            onChange={handleOtherInputChange}
          >
            <MenuItem value="">יש לבחור מהרשימה</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>
        </FormControl>
        {validation.TourCount && <div className="error">{validation.TourCount}</div>}

      <br />
      <br />


      <InputLabel htmlFor="TourPeopleCount"> מספר האנשים בסיור</InputLabel>
      <FormControl fullWidth>
        <InputLabel htmlFor="TourPeopleCount"> יש להזין ערך</InputLabel>
        <TextField
          id="TourPeopleCount"
          name="TourPeopleCount"
          type="number"
          value={formData.TourPeopleCount}
          onChange={handleOtherInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 1,
          }}
        >
        </TextField>
      </FormControl>
      {validation.TourPeopleCount && <div className="error">{validation.TourPeopleCount}</div>}



      <br />


      <InputLabel>מהן שעות הסיור הרצויות עבורכם</InputLabel>

      <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
            <label>
              <LightModeIcon /> בוקר
              <Checkbox
                name="TourTimeMorning"
                checked={formData.TourTimeMorning}
                onChange={handleOtherInputChange}
                style={{ fontSize: "45px" }}
              />
            </label>
          </Box>

          <Box style={{ display: "flex", alignItems: "center", margin: "0 25px" }}>
            <label>
              <WbTwilightIcon /> צהריים
              <Checkbox
                name="TourTimeAfternoon"
                checked={formData.TourTimeAfternoon}
                onChange={handleOtherInputChange}
              />
            </label>
          </Box>

          <Box style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
            <label>
              <NightsStayIcon /> ערב
              <Checkbox
                name="TourTimeEvening"
                checked={formData.TourTimeEvening}
                onChange={handleOtherInputChange}
              />
            </label>
          </Box>
        </div>
      </div>
      {validation.TourTime && <div className="error">{validation.TourTime}</div>}

      <br />
      <br />

      <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
        <Box display="flex" alignItems="center">
          <InputLabel style={{ marginRight: '10px' }}>התקציב הרצוי לאדם</InputLabel>
          <Box
            component="span"
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
            }}
          >
            {formData.BudgetRange} ₪
          </Box>
        </Box>
        <br />
        <Box display="flex" justifyContent="center" alignItems="center" width='80%' margin="auto">
          <Slider
            name="BudgetRange"
            min={50}
            max={300}
            step={25}
            value={formData.BudgetRange}
            onChange={(event, newValue) =>
              handleOtherInputChange({ target: { name: 'BudgetRange', value: newValue } })
            }
            valueLabelDisplay="auto"
            marks
          />
        </Box>

        {validation.BudgetRange && <div className="error">{validation.BudgetRange}</div>}
      </div>

      <br />

      <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ display: "flex", alignItems: "center", margin: "0 50px" }}>
          <label>
            <AccessibleIcon />  נגישות?
            <Checkbox
              name="Accessibility"
              checked={formData.Accessibility}
              onChange={handleOtherInputChange}
              style={{ fontSize: "45px" }}
            />
          </label>
        </Box>
        </div>
      </div>

  </div>

  <br />
  <br />

  </div>
  </ResponsiveWrapper>
  );
};

export default Page1;









// // client\src\common\components\QuestionnairePages\Page1.js
// import React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import heLocale from 'date-fns/locale/he';
// import Checkbox from '@mui/material/Checkbox';
// import Slider from '@mui/material/Slider';

// import LightModeIcon from '@mui/icons-material/LightMode'; 
// import WbTwilightIcon from '@mui/icons-material/WbTwilight'; 
// import NightsStayIcon from '@mui/icons-material/NightsStay';
// import AccessibleIcon from '@mui/icons-material/Accessible';

// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import hebrewLocale from 'date-fns/locale/he';

// import ResponsiveWrapper from '../styled-components/ResponsiveWrapper';
// import { Container, Grid } from '@mui/material';




// const Page1 = ({
//   formData,
//   handleDateInputChange,
//   handleOtherInputChange,
//   validation,
//   totalPages
// }) => {


//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={2} alignItems="center" justifyContent="center">
//         <Grid item xs={12}>
//           <h1 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0)' }}>-------------------------------------</h1>
//         </Grid>
//           <Grid item xs={12}>
//             <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
//             <h4 style={{ textAlign: 'center' }}>עמוד 1 מתוך {totalPages}</h4>

//       <FormControl fullWidth>
//       <InputLabel htmlFor="TourArea">בחרו איזור לסיור היין שלכם</InputLabel>
//         <Select
//           fullWidth
//           id="TourArea"
//           name="TourArea"
//           value={formData.TourArea}
//           onChange={handleOtherInputChange}
//         >
//           <MenuItem value="">יש לבחור מהרשימה</MenuItem>
//           <MenuItem value="ירושלים">ירושלים</MenuItem>
//         </Select>
//         {validation.TourArea && <div className="error">{validation.TourArea}</div>}
//       </FormControl>

//       <br />
//       <br />

//         <InputLabel htmlFor="selectedDate">בחרו תאריך לסיור היין שלכם</InputLabel>
//         <LocalizationProvider dateAdapter={AdapterDateFns} locale={heLocale}>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <DatePicker
//               id="selectedDate"
//               value={formData.selectedDate}
//               onChange={handleDateInputChange}
//               placeholderText="יש לבחור תאריך"
//               dateFormat="dd/MM/yyyy"
//               renderInput={(props) => <input {...props} />}
//               locale={hebrewLocale}
//             />
            
//             <TextField
//               disabled
//               label="היום שנבחר"
//               variant="outlined"
//               value={
//                 formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) : 'לא נבחר תאריך'
//               }
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     {/* <ArrowDropDownIcon /> */}
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>
//         </LocalizationProvider>
//         {validation.selectedDate && <div className="error">{validation.selectedDate}</div>}

//       <br />
//       <br />

//         <FormControl fullWidth>
//           <InputLabel htmlFor="TourCount">בכמה יקבים תרצו לסייר בסיור היין שלכם</InputLabel>
//           <Select
//             id="TourCount"
//             name="TourCount"
//             value={formData.TourCount}
//             onChange={handleOtherInputChange}
//           >
//             <MenuItem value="">יש לבחור מהרשימה</MenuItem>
//             <MenuItem value="1">1</MenuItem>
//             <MenuItem value="2">2</MenuItem>
//             <MenuItem value="3">3</MenuItem>
//           </Select>
//         </FormControl>
//         {validation.TourCount && <div className="error">{validation.TourCount}</div>}

//       <br />
//       <br />

//       <InputLabel>מהן שעות הסיור הרצויות עבורכם</InputLabel>

//       <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <Box style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
//             <label>
//               <LightModeIcon /> בוקר
//               <Checkbox
//                 name="TourTimeMorning"
//                 checked={formData.TourTimeMorning}
//                 onChange={handleOtherInputChange}
//                 style={{ fontSize: "45px" }}
//               />
//             </label>
//           </Box>

//           <Box style={{ display: "flex", alignItems: "center", margin: "0 25px" }}>
//             <label>
//               <WbTwilightIcon /> צהריים
//               <Checkbox
//                 name="TourTimeAfternoon"
//                 checked={formData.TourTimeAfternoon}
//                 onChange={handleOtherInputChange}
//               />
//             </label>
//           </Box>

//           <Box style={{ display: "flex", alignItems: "center", margin: "0 15px" }}>
//             <label>
//               <NightsStayIcon /> ערב
//               <Checkbox
//                 name="TourTimeEvening"
//                 checked={formData.TourTimeEvening}
//                 onChange={handleOtherInputChange}
//               />
//             </label>
//           </Box>
//         </div>
//       </div>
//       {validation.TourTime && <div className="error">{validation.TourTime}</div>}

//       <br />
//       <br />

//       <FormControl fullWidth>
//         <InputLabel htmlFor="TourPeopleCount">מספר אנשים בסיור</InputLabel>
//         <TextField
//           id="TourPeopleCount"
//           name="TourPeopleCount"
//           type="number"
//           value={formData.TourPeopleCount}
//           onChange={handleOtherInputChange}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           inputProps={{
//             min: 1,
//           }}
//         >
//         </TextField>
//       </FormControl>
//       {validation.TourPeopleCount && <div className="error">{validation.TourPeopleCount}</div>}

//       <br />
//       <br />

//       <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
//         <Box display="flex" alignItems="center">
//           <InputLabel style={{ marginRight: '10px' }}>תקציב רצוי לאדם</InputLabel>
//           <Box
//             component="span"
//             sx={{
//               display: 'block',
//               p: 1,
//               m: 1,
//               bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
//               color: (theme) =>
//                 theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//               border: '1px solid',
//               borderColor: (theme) =>
//                 theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
//               borderRadius: 2,
//               fontSize: '0.875rem',
//               fontWeight: '700',
//             }}
//           >
//             {formData.BudgetRange} ₪
//           </Box>
//         </Box>
//         <br />
//         <Box display="flex" justifyContent="center" alignItems="center" width='80%' margin="auto">
//           <Slider
//             name="BudgetRange"
//             min={50}
//             max={300}
//             step={25}
//             value={formData.BudgetRange}
//             onChange={(event, newValue) =>
//               handleOtherInputChange({ target: { name: 'BudgetRange', value: newValue } })
//             }
//             valueLabelDisplay="auto"
//             marks
//           />
//         </Box>

//         {validation.BudgetRange && <div className="error">{validation.BudgetRange}</div>}
//       </div>

//       <br />
//       <br />

//       <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Box style={{ display: "flex", alignItems: "center", margin: "0 50px" }}>
//           <label>
//             <AccessibleIcon />  נגישות?
//             <Checkbox
//               name="Accessibility"
//               checked={formData.Accessibility}
//               onChange={handleOtherInputChange}
//               style={{ fontSize: "45px" }}
//             />
//           </label>
//         </Box>
//         </div>
//       </div>

//   </div>

//   <br />
//   <br />

//         </Grid>
//       </Grid>
//     </Container>
//   );
// };
// export default Page1;


