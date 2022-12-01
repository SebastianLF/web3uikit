import React from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';
import Loader from './Loader';
import NoData from './NoData';
import { TriangleUp, TriangleDown } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';

type TTableProps = Pick<
    ITableNewProps,
    | 'header'
    | 'noPagination'
    | 'pageSize'
    | 'customLoadingContent'
    | 'customNoDataComponent'
    | 'customNoDataText'
    | 'isLoading'
    | 'tableBackgroundColor'
    | 'isScrollableOnOverflow'
    | 'customTableBorder'
    | 'alignCellItems'
    | 'justifyCellItems'
    | 'cellPadding'
    | 'headerTextColor'
    | 'headerBgColor'
    | 'hover'
    | 'hoverBackgroundColor'
>;

interface ITableProps extends TTableProps {
    pageNum: number;
    tableData: (React.ReactNode | string)[][];
    sortField: number;
    order: string;
    handleSortingChange: (key: number) => void;
}

const { TableStyled, TableContainer, DivTableCell } = styles;
const TableBase: React.FC<ITableProps> = ({
    customLoadingContent,
    customNoDataComponent,
    customNoDataText,
    header,
    isLoading,
    noPagination,
    pageNum,
    pageSize,
    tableData,
    tableBackgroundColor,
    isScrollableOnOverflow,
    customTableBorder,
    alignCellItems,
    justifyCellItems,
    cellPadding,
    headerBgColor,
    headerTextColor,
    hover,
    hoverBackgroundColor,
    sortField,
    order,
    handleSortingChange,
}) => {
    const computeCurrentData = (): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = pageNum * pageSize;
        const to = from + pageSize;
        return tableData?.slice(from, to);
    };

    return (
        <TableContainer
            isScrollableOnOverflow={isScrollableOnOverflow}
            customTableBorder={customTableBorder}
        >
            <TableStyled
                tableBackgroundColor={tableBackgroundColor}
                alignCellItems={alignCellItems}
                headerTextColor={headerTextColor}
                headerBgColor={headerBgColor}
                hoverBackgroundColor={hoverBackgroundColor}
            >
                <thead>
                    <tr>
                        {header.map((head, key) => (
                            <th>
                                <DivTableCell
                                    justifyCellItems={justifyCellItems}
                                    cellPadding={cellPadding}
                                    onClick={() => handleSortingChange(key)}
                                >
                                    {head}
                                    {sortField === key &&
                                        (order === 'asc' ? (
                                            <TriangleUp
                                                title="triangle up icon"
                                                titleId="table triangle up icon"
                                                fill={color.blueGray50}
                                            />
                                        ) : (
                                            <TriangleDown
                                                title="triangle down icon"
                                                titleId="table triangle down icon"
                                                fill={color.blueGray50}
                                            />
                                        ))}
                                </DivTableCell>
                            </th>
                        ))}
                    </tr>
                </thead>
                {!isLoading && (
                    <tbody>
                        {computeCurrentData().map((row) => (
                            <tr className={`${hover && 'hover'}`}>
                                {row.map((element) => (
                                    <td>
                                        <DivTableCell
                                            justifyCellItems={justifyCellItems}
                                            cellPadding={cellPadding}
                                        >
                                            {element}
                                        </DivTableCell>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                )}
            </TableStyled>
            {tableData && computeCurrentData().length == 0 && (
                <NoData
                    customNoDataComponent={customNoDataComponent}
                    customNoDataText={customNoDataText}
                />
            )}
            {isLoading && (
                <Loader customLoadingContent={customLoadingContent} />
            )}
        </TableContainer>
    );
};

export default TableBase;
