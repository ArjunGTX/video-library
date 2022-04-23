import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button } from "../../components";
import * as api from "../../model/api";
import { Category } from "../../model/type";

interface Props {
  className?: string;
}

export const CategoryList: React.FC<Props> = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategoriesRequest();
  }, []);

  const getCategoriesRequest = async () => {
    setLoading(true);
    try {
      const { status, data } = await api.getCategories();
      if (status !== 200) return;
      setCategories(data.categories);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx("full-width ofx-auto p-lg fr-fs-ct", className)}>
      <Button variant="outlined" className="mx-md br-xl px-xl txt-no-wrap">
        All
      </Button>
      <Button variant="outlined" className="mx-md br-xl px-xl txt-no-wrap">
        Latest
      </Button>
      {categories.map((category) => (
        <Button
          key={category._id}
          variant="outlined"
          className="mx-md br-xl px-xl txt-no-wrap"
        >
          {category.categoryName}
        </Button>
      ))}
    </div>
  );
};
