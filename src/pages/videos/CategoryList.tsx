import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button, SkeletonButton } from "../../components";
import { useCategories } from "../../context";
import * as api from "../../model/api";
import { getArray } from "../../util/helper";

interface Props {
  className?: string;
}

export const CategoryList: React.FC<Props> = ({ className }) => {
  const { categories, setCategories } = useCategories();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      getCategoriesRequest();
    }
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
    <div
      className={clsx(
        "full-width ofx-auto p-lg fr-fs-ct category-container",
        className
      )}
    >
      {loading ? (
        getArray(5).map((item) => (
          <SkeletonButton size="lg" className="mx-md" key={item} />
        ))
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
