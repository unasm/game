<?php
/**
 *    @name:       ./csvwriter.php
 *    @author:     unasm<1264310280@qq.com>
 *    @since :     2014-04-09 17:03:41
 */
class CSVWriter{
    protected $file;
    protected $csv;
    function __construct($pathToWrite)
    {
        $this->csv = file_get_contents($pathToWrite);
        echo $this->csv."<br/>";
        //$this->file = fopen($pathToWrite , "r");
    }
    protected function _from_csv($string)
    {
        $data = array();

        // Splits
        $rows = explode("\n", trim($string));
        $headings = explode(',', array_shift($rows));
        foreach ($rows as $row)
        {
            // The substr removes " from start and end
            $data_fields = explode('","', trim(substr($row, 1, -1)));

            if (count($data_fields) == count($headings))
            {
                $data[] = array_combine($headings, $data_fields);
            }
        }

        return $data;
    }
}
?>
