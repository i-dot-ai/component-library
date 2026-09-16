/** @jsxImportSource solid-js */
import {
    Table,
    TableCaption,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from "@i-dot-ai-npm/component-library-solid";

export default function SolidTable() {
    return (
        <Table>
            <TableCaption size="medium">Monthly energy costs</TableCaption>
            <TableHead>
                <TableRow>
                    <TableHeader>Month</TableHeader>
                    <TableHeader numeric>Gas</TableHeader>
                    <TableHeader numeric>Electricity</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>January</TableCell>
                    <TableCell numeric>£85</TableCell>
                    <TableCell numeric>£95</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>February</TableCell>
                    <TableCell numeric>£75</TableCell>
                    <TableCell numeric>£55</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>March</TableCell>
                    <TableCell numeric>£165</TableCell>
                    <TableCell numeric>£125</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}