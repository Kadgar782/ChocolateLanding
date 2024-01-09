import {
  Checkbox,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { ChangeEventHandler } from "react";

export const ListOfParametrs = ({
  categories,
  handleCategoryFilterChange,
}: {
  categories: string[];
  handleCategoryFilterChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return categories.map((elm, index) => {
    return (
      <ListItem key={index} className="p-0">
        <label
          htmlFor={elm}
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id={elm}
              ripple={false}
              crossOrigin=""
              key={index}
              name={elm}
              className=" flex flex-row bg-secondary hover:scale-105  hover:before:opacity-0"
              onChange={handleCategoryFilterChange}
              containerProps={{
                className: "p-0",
              }}
            />
          </ListItemPrefix>
          <Typography className="font-medium text-text">{elm}</Typography>
        </label>
      </ListItem>
    );
  });
};
