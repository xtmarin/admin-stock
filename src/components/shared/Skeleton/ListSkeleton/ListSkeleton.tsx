import { Skeleton } from "@/components/ui";
import { ListSkeletonProps } from "./ListSkeleton.type";
import styles from "./ListSkeleton.module.scss";

export function ListSkeleton(props: ListSkeletonProps) {
    const { totalRender = 10 } = props;

    return (
        <div className={styles.container}>
            {Array.from({ length: totalRender }, (_, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.textContainer}>
                        <Skeleton className={styles.textTop} />
                        <Skeleton className={styles.textButtom} />
                    </div>
                </div>

            ))}
        </div>
    );
}