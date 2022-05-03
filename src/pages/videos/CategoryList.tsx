import clsx from "clsx";
import React, { useEffect } from "react";
import { Button, SkeletonButton } from "../../components";
import { useCategories, useFilter } from "../../context";

import { getArray } from "../../util/helper";

interface Props {
  className?: string;
}

export const CategoryList: React.FC<Props> = ({ className }) => {
  const { categories, loading, syncCategoriesWithServer } = useCategories();
  const { filter, setFilter } = useFilter();

  useEffect(() => {
    if (categories.length === 0) {
      syncCategoriesWithServer();
    }
  }, []);

  return (
    <div
      className={clsx(
        "full-width p-lg fr-fs-ct pos-abs z-200 bg-secondary category-container",
        className,
        loading || "ofx-auto"
      )}
    >
      {loading ? (
        getArray(5).map((item) => (
          <SkeletonButton className="mx-md" key={item} />
        ))
      ) : (
        <>
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "contained" : "outlined"}
            className="mx-md br-xl px-xl txt-no-wrap"
          >
            All
          </Button>
          <Button
            onClick={() => setFilter("latest")}
            variant={filter === "latest" ? "contained" : "outlined"}
            className="mx-md br-xl px-xl txt-no-wrap"
          >
            Latest
          </Button>
          <Button
            onClick={() => setFilter("oldest")}
            variant={filter === "oldest" ? "contained" : "outlined"}
            className="mx-md br-xl px-xl txt-no-wrap"
          >
            Oldest
          </Button>
          {categories.map((category) => (
            <Button
              onClick={() => setFilter(category.category)}
              key={category._id}
              variant={filter === category.category ? "contained" : "outlined"}
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
