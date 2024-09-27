ement resource if the SQL statement was issued successfully,
 * or false if the database failed to execute the SQL statement.
 */
function db2_exec($connection, string $statement, array $options = []) {}

/**
 * Prepares an SQL statement to be executed
 * @link https://php.net/manual/en/function.db2-prepare.php
 * @param resource $connection <p>
 * A valid database connection resource variable as returned from
 * db2_connect or db2_pconnect.
 * </p>
 * @param string $statement <p>
 * An SQL statement, optionally containing one or more parameter markers..
 * </p>
 * @param array $options <p>
 * An associative array containing statement options. You can use this
 * parameter to request a scrollable cursor on database servers that
 * support this functionality.
 * cursor
 * </p>
 * </p>
 * Passing the DB2_FORWARD_ONLY value requests a
 * forward-only cursor for this SQL statement. This is the default
 * type of cursor, and it is supported by all database servers. It is
 * also much faster than a scrollable cursor.
 * </p>
 * <p>
 * Passing the DB2_SCROLLABLE value requests a
 * scrollable cursor for this SQL statement. This type of cursor
 * enables you to fetch rows non-sequentially from the database
 * server. However, it is only supported by DB2 servers, and is much
 * slower than forward-only cursors.
 * </p>
 * @return resource|false A statement resource if the SQL statement was successfully parsed and
 * prepared by the database server. Returns false if the database server
 * returned an error. You can determine which error was returned by calling
 * db2_stmt_error or db2_stmt_errormsg.
 */
function db2_prepare($connection, string $statement, array $options = []) {}

/**
 * Executes a prepared SQL statement
 * @link https://php.net/manual/en/function.db2-execute.php
 * @param resource $stmt <p>
 * A prepared statement returned from db2_prepare.
 * </p>
 * @param array $parameters <p>
 * An array of input parameters matching any parameter markers contained
 * in the prepared statement.
 * </p>
 * @return bool true on success or false on failure.
 */
function db2_execute($stmt, array $parameters = []): bool {}

/**
 * Returns a string containing the last SQL statement error message
 * @link https://php.net/manual/en/function.db2-stmt-errormsg.php
 * @param resource|null $stmt <p>
 * A valid statement resource or NULL.
 * </p>
 * @return string a string containing the error message and SQLCODE value for the
 * last error that occurred issuing an SQL statement.
 */
function db2_stmt_errormsg($stmt = null) {}

/**
 * Returns the last connection error message and SQLCODE value
 * @link https://php.net/manual/en/function.db2-conn-errormsg.php
 * @param resource|null $connection <p>
 * A connection resource associated with a connection that initially
 * succeeded, but which over time became invalid.
 * </p>
 * @return string a string containing the error message and SQLCODE value resulting
 * from a failed connection attempt. If there is no error associated with the last
 * connection attempt, db2_conn_errormsg returns an empty
 * string.
 */
function db2_conn_errormsg($connection = null) {}

/**
 * Returns a string containing the SQLSTATE returned by the last connection attempt
 * @link https://php.net/manual/en/function.db2-conn-error.php
 * @param resource|null $connection <p>
 * A connection resource associated with a connection that initially
 * succeeded, but which over time became invalid.
 * </p>
 * @return string the SQLSTATE value resulting from a failed connection attempt.
 * Returns an empty string if there is no error associated with the last
 * connection attempt.
 */
function db2_conn_error($connection = null) {}

/**
 * Returns a string containing the SQLSTATE returned by an SQL statement
 * @link https://php.net/manual/en/function.db2-stmt-error.php
 * @param resource|null $stmt <p>
 * A valid statement resource or NULL.
 * </p>
 * @return string a string containing an SQLSTATE value.
 */
function db2_stmt_error($stmt = null) {}

/**
 * Requests the next result set from a stored procedure
 * @link https://php.net/manual/en/function.db2-next-result.php
 * @param resource $stmt <p>
 * A prepared statement returned from db2_exec or
 * db2_execute.
 * </p>
 * @return resource|false A new statement resource containing the next result set if the
 * stored procedure returned another result set. Returns false if the stored
 * procedure did not return another result set.
 */
function db2_next_result($stmt) {}

/**
 * Returns the number of fields contained in a result set
 * @link https://php.net/manual/en/function.db2-num-fields.php
 * @param resource $stmt <p>
 * A valid statement resource containing a result set.
 * </p>
 * @return int|false An integer value representing the number of fields in the result
 * set associated with the specified statement resource. Returns false if
 * the statement resource is not a valid input value.
 */
function db2_num_fields($stmt): int|false {}

/**
 * Returns the number of rows affected by an SQL statement
 * @link https://php.net/manual/en/function.db2-num-rows.php
 * @param resource $stmt <p>
 * A valid stmt resource containing a result set.
 * </p>
 * @return int|false the number of rows affected by the last SQL statement issued by
 * the specified statement handle, or false in case of failure.
 */
function db2_num_rows($stmt): int|false {}

/**
 * Returns the name of the column in the result set
 * @link https://php.net/manual/en/function.db2-field-name.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return string|false A string containing the name of the specified column. If the
 * specified column does not exist in the result
 * set, db2_field_name returns false.
 */
function db2_field_name($stmt, int|string $column): string|false {}

/**
 * Returns the maximum number of bytes required to display a column
 * @link https://php.net/manual/en/function.db2-field-display-size.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return int|false An integer value with the maximum number of bytes required to
 * display the specified column. If the column does not exist in the result
 * set, db2_field_display_size returns false.
 */
function db2_field_display_size($stmt, int|string $column): int|false {}

/**
 * Returns the position of the named column in a result set
 * @link https://php.net/manual/en/function.db2-field-num.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return int|false An integer containing the 0-indexed position of the named column in
 * the result set. If the specified column does not exist in the result set,
 * db2_field_num returns false.
 */
function db2_field_num($stmt, int|string $column): int|false {}

/**
 * Returns the precision of the indicated column in a result set
 * @link https://php.net/manual/en/function.db2-field-precision.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return int|false An integer containing the precision of the specified column. If the
 * specified column does not exist in the result set,
 * db2_field_precision returns false.
 */
function db2_field_precision($stmt, int|string $column): int|false {}

/**
 * Returns the scale of the indicated column in a result set
 * @link https://php.net/manual/en/function.db2-field-scale.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return int|false An integer containing the scale of the specified column. If the
 * specified column does not exist in the result set,
 * db2_field_scale returns false.
 */
function db2_field_scale($stmt, int|string $column): int|false {}

/**
 * Returns the data type of the indicated column in a result set
 * @link https://php.net/manual/en/function.db2-field-type.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return string|false A string containing the defined data type of the specified column.
 * If the specified column does not exist in the result set,
 * db2_field_type returns false.
 */
function db2_field_type($stmt, int|string $column): string|false {}

/**
 * Returns the width of the current value of the indicated column in a result set
 * @link https://php.net/manual/en/function.db2-field-width.php
 * @param resource $stmt <p>
 * Specifies a statement resource containing a result set.
 * </p>
 * @param int|string $column <p>
 * Specifies the column in the result set. This can either be an integer
 * representing the 0-indexed position of the column, or a string
 * containing the name of the column.
 * </p>
 * @return int|false An integer containing the width of the specified character or
 * binary data type column in a result set. If the specified column does not
 * exist in the result set, db2_field_width returns
 * false.
 */
function db2_field_width($stmt, int|string $column): int|false {}

/**
 * Returns the cursor type used by a statement resource
 * @link https://php.net/manual/en/function.db2-cursor-type.php
 * @param resource $stmt <p>
 * A valid statement resource.
 * </p>
 * @return int either DB2_FORWARD_ONLY if the statement
 * resource uses a forward-only cursor or DB2_SCROLLABLE if
 * the statement resource uses a scrollable cursor.
 */
function db2_cursor_type($st