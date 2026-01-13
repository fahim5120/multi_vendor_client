import React, { useEffect, useState } from "react";
import SellingChart from "./SellingChart";
// import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
// import { fetchSellerReport } from "../../../Redux Toolkit/Seller/sellerSlice";
import ReportCard from "./Report/ReportCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
import { fetchSellerReport } from "../../Redux Toolkit/features/seller/sellerSlice";

const Chart = [
  { name: "Today", value: "today" },
  { name: "Last 7 days", value: "daily" },
  { name: "Last 12 Month", value: "monthly" },
];

const HomePage = () => {
  const { seller } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();
  const [chartType, setChartType] = useState(Chart[0].value);

  useEffect(() => {
    dispatch(fetchSellerReport(localStorage.getItem("jwt") || ""));
  }, [dispatch]);

  const handleChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-4 gap-5">
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={"₹" + seller.report?.totalEarnings}
            title={"Total Earnings"}
          />
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={seller.report?.totalSales}
            title={"Total Sales"}
          />
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={seller.report?.totalRefunds}
            title={"Total Refund"}
          />
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={seller.report?.canceledOrders}
            title={"Cancel Orders"}
          />
        </div>
      </section>

      <div className="h-[500px] space-y-10 p-5 lg:p-10 bg-slate-800 rounded-md">
        <div className="w-40">
          <FormControl fullWidth>
            <InputLabel sx={{ color: "white" }} id="chart-type-label">
              Chart Type
            </InputLabel>
            <Select
              labelId="chart-type-label"
              value={chartType}
              label="Chart Type"
              onChange={handleChange}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              {Chart.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="h-[350px]">
          <SellingChart chartType={chartType} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
